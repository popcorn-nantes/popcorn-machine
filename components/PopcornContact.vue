<template>
  <div>
    <h2
      v-if="
        requestStatus !== 'FINISHED_ERROR' && requestStatus !== 'FINISHED_OK'
      "
      class="subtitle"
    >
      Un retour, une question ou une suggestion concernant le site ? C'est ici !
    </h2>

    <template v-if="requestStatus === 'FINISHED_OK'">
      <div class="message is-success">
        <div class="message-body">Le message a bien été posté 👍</div>
      </div>
    </template>

    <template v-if="requestStatus === 'FINISHED_ERROR'">
      <div class="message is-danger">
        <div class="message-body">
          Nous sommes désolés, une erreur est survenue pendant l'envoi du
          message :
          <br />
          {{ requestError }}
        </div>
      </div>
    </template>

    <template
      v-if="
        requestStatus !== 'FINISHED_OK' && requestStatus !== 'FINISHED_ERROR'
      "
    >
      <form @submit.prevent="onSubmit">
        <div v-show="errors.length > 0" class="message is-danger">
          <div class="message-body">
            <div v-for="(error, index) in errors" :key="index">
              {{ error.message }}
            </div>
          </div>
        </div>
        <div class="field">
          <label for="email" class="label">Votre email</label>
          <div class="control">
            <input
              id="email"
              type="text"
              class="input"
              v-model="inputs.email"
              :class="{ 'is-danger': getError('email') }"
            />
          </div>
        </div>
        <div class="field">
          <label for="message" class="label">Votre message</label>
          <div class="control">
            <textarea
              id="message"
              v-model="inputs.message"
              class="textarea"
              :class="{ 'is-danger': getError('message') }"
            ></textarea>
          </div>
        </div>
        <input
          class="button is-warning"
          :disabled="requestStatus === 'PENDING'"
          type="submit"
          :value="requestStatus === 'PENDING' ? 'envoi en cours' : 'Envoyer'"
        />
      </form>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      inputs: {
        email: '',
        message: '',
        nom: ''
      },
      errors: [],
      requestStatus: 'NOT_STARTED',
      requestError: null,
      formAlreadySubmitted: false
    }
  },
  methods: {
    formValidate() {
      this.errors = []
      if (!this.inputs.email.trim()) {
        this.errors.push({
          id: 'email',
          message: 'Le champ email est vide 😱 '
        })
      }
      if (!this.inputs.message.trim()) {
        this.errors.push({
          id: 'message',
          message: "Il n'y a pas de message 😭"
        })
      } else if (this.inputs.message.length < 5) {
        this.errors.push({
          id: 'message',
          message: 'Le message semble trop court 🤔'
        })
      }
    },
    getError(id) {
      return this.errors.find(e => e.id === id)
    },
    onSubmit() {
      this.requestError = null
      this.formAlreadySubmitted = true
      this.formValidate()
      if (this.errors.length > 0) {
        return
      }
      this.requestStatus = 'PENDING'
      const options = {
        text: `${this.inputs.email} vous a envoyé ce message depuis le site : ${
          this.inputs.message
        }`
      }
      axios
        .post(process.env.POPCORN_SLACK_WEBHOOK, JSON.stringify(options))
        .then(r => {
          this.requestStatus = 'FINISHED_OK'
        })
        .catch(e => {
          this.requestStatus = 'FINISHED_ERROR'
          this.requestError = e.message
        })
    }
  },
  // les erreurs affichées par le formulaire doivent s'effacer
  // dès que l'utilisateur a entrer quelque chose de correct.
  watch: {
    inputs: {
      deep: true,
      handler: function() {
        if (this.formAlreadySubmitted) {
          this.formValidate()
        }
      }
    }
  }
}
</script>
