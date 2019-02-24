<template>
  <div class="person" :id="`person-${person.$slug}`">
    <BulmaCardHoverEffect>
      <div class="card" @click="detail()">
        <PhotoCard :imageUrl="person.photo">
          <span class="title is-4">{{person.prenom}} {{person.nom}}</span>
        </PhotoCard>
        <div class="card-content">
          <h2 style="font-size:20px;" class="has-text-centered">{{person.titre}}</h2>
          <h3
            v-show="person.sous_titre"
            style="font-size:15px;font-style:italic"
            class="has-text-centered"
          >{{person.sous_titre}}</h3>
          <div class="has-text-centered" style="padding-top: 1em">
            <Tags class="domaines-metiers" :tags="person.domaines_metiers"/>
          </div>

          <div class="has-text-centered" style="padding-top: 1em">
            <Tags class="technologies" :tags="person.technologies"/>
          </div>
          <div class="content">
            <div class="has-text-centered">
              <br>
              <nuxt-link
                :to="{path: `/person/${person.$slug}`,query: { search: $store.getters.currentSearch}}"
                class="button is-primary"
              >Voir le profil</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </BulmaCardHoverEffect>
  </div>
</template>

<script>
import Tags from './Tags'
import PhotoCard from './PhotoCard'
import BulmaCardHoverEffect from './BulmaCardHoverEffect'

export default {
  components: {
    Tags,
    PhotoCard,
    BulmaCardHoverEffect
  },
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  methods: {
    detail() {
      this.$router.push({
        path: `/person/${this.person.$slug}`,
        query: { search: this.$store.getters.currentSearch }
      })
    }
  }
}
</script>
