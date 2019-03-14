<template>
  <div>
    <div class="person">
      <div class="columns">
        <div class="column">
          <PhotoCard :imageUrl="person.photo" />
        </div>
        <div class="column is-two-thirds">
          <div class="columns">
            <div class="column is-two-thirds">
              <h1 style="text-transform:uppercase" class="title">
                {{ person.prenom }} {{ person.nom }}
              </h1>
              <h2 class="subtitle">{{ person.titre }}</h2>
              <h2 class="subtitle">
                <Tags
                  class="domaines-metiers"
                  :tags="person.domaines_metiers"
                />
              </h2>
              <h2 class="subtitle">
                <Tags class="technologies" :tags="person.technologies" />
              </h2>
            </div>
            <div class="column has-text-right-desktop">
              <button class="button is-warning" @click="openModal">
                <span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <span>Proposer un projet</span>
              </button>
            </div>
          </div>

          <div class="content" v-html="person.$html"></div>
        </div>
      </div>
    </div>

    <Modal id="contact-person" ref="modal">
      <h1 class="title" slot="title">
        Contacter {{ person.prenom }} {{ person.nom }}
      </h1>
      <h2 class="subtitle">{{ person.titre }}</h2>
      <p style="margin-top:1rem" class="is-size-5">{{ person.mail }}</p>
      <p v-show="person.telephone" style="margin-top:1rem" class="is-size-5">
        {{ person.telephone }}
      </p>
      <p style="margin-top:2rem">
        <em>Indiquez-lui que vous l'avez trouvé·e sur Popcorn :)</em>
      </p>
      <div style="font-size:3rem">🍿</div>
    </Modal>
  </div>
</template>

<script>
import Tags from './Tags'
import PhotoCard from './PhotoCard'
import Modal from './Modal'

export default {
  components: {
    Tags,
    PhotoCard,
    Modal
  },
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  methods: {
    openModal() {
      this.$refs.modal.open()
    }
  }
}
</script>
