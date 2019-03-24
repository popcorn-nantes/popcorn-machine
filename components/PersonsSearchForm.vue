<template>
  <form @submit.prevent="onSubmit">
    <div class="field has-text-centered has-addons">
      <div class="container">
        <div class="control has-icons-left is-expanded">
          <input
            aria-label="Rechercher un développeur par mot-clef"
            id="search"
            class="input is-medium is-flat"
            v-model="search"
            type="text"
            placeholder="Site, Boutique, Application, React, WordPress, Java, PHP ..."
          />
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <div class="control">
          <input
            value="Rechercher"
            type="submit"
            class="button is-warning is-medium"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.search)
    }
  },
  created() {
    // si on vient d'une autre page, filtrer les profils en fonction
    // de la recherche en cours, si il y en a une.
    if (this.$store.state.currentSearch.trim()) {
      this.search = this.$store.state.currentSearch.trim()
    }
  }
}
</script>

<style scoped>
div.container {
  display: flex;
  justify-content: center;
  max-width: 900px;
}
div.field {
  padding-bottom: 3rem;
  margin: auto;
}
</style>
