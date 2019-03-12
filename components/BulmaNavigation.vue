<template>
  <header>
    <nav class="navbar is-light has-shadow is-spaced">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-item">
            <strong>
              <nuxt-link class="has-text-dark is-size-4" to="/">
                POPCORN 🍿
                <span class="navbar-location is-size-6">
                  {{ location }}
                </span>
              </nuxt-link>
            </strong>
          </span>
          <div
            @click="showOnMobile = !showOnMobile"
            :class="{ 'is-active': showOnMobile }"
            class="navbar-burger"
            data-target="app-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <!-- This "nav-menu" is hidden on mobile -->
        <!-- Add the modifier "is-active" to display it on mobile -->
        <div
          id="app-menu"
          class="navbar-menu"
          :class="{ 'is-active': showOnMobile }"
        >
          <div class="navbar-end">
            <nuxt-link
              @click.native="showOnMobile = false"
              to="/"
              class="navbar-item"
              >Accueil</nuxt-link
            >
            <nuxt-link
              @click.native="showOnMobile = false"
              to="/page/a-propos"
              class="navbar-item"
              >En savoir plus</nuxt-link
            >
            <nuxt-link
              @click.native="showOnMobile = false"
              to="/popcorns"
              class="navbar-item"
              >Annuaire des Popcorns</nuxt-link
            >
            <span class="navbar-item">
              <nuxt-link
                @click.native="showOnMobile = false"
                to="/page/inscription"
                class="button is-danger has-text-white"
                >Freelance ? Inscription</nuxt-link
              >
            </span>
            <div class="navbar-item">
              <button class="button is-dark" @click="openModal">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <Modal id="contact" @modal="assignModal">
        <h1 class="title" slot="title">Contact</h1>
        <PopcornContact />
      </Modal>
    </div>
  </header>
</template>

<script>
import PopcornContact from '../components/PopcornContact'
import Modal from '../components/Modal'

export default {
  components: {
    PopcornContact,
    Modal
  },
  computed: {
    location: () => process.env.POPCORN_LOCATION
  },
  data() {
    return {
      modal: null,
      showOnMobile: false
    }
  },
  methods: {
    openModal() {
      if (this.modal) {
        this.modal.open()
      }
    },
    assignModal(modal) {
      this.modal = modal
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  margin-left: 1rem;
}
.navbar-brand a {
  position: relative;
}
.navbar-brand .navbar-item {
  padding-top: 0;
}

.navbar-item:hover {
  color: #363636;
}
.navbar-location {
  position: absolute;
  bottom: -40%;
  right: 5px;
  white-space: nowrap;
  z-index: 1;
  transform-origin: bottom right;
  transform: rotate(-2deg);
  text-shadow: 0 0 10px hsl(0, 0%, 80%);
  color: #d22321;
}

.navbar-end .navbar-item:last-child,
.navbar-end .navbar-item:nth-last-child(2) {
  padding-right: 0;
}

/* Create slide animation on mobile */
@media screen and (max-width: 999px) {
  .navbar-end {
    padding: 0;
  }
  .navbar-menu {
    display: block;
    overflow: hidden;
    max-height: 0px;
    padding: 0;
    transition: max-height 0.2s;
  }

  .navbar-menu.is-active {
    max-height: 100vh;
    transition: max-height 0.5s;
  }

  .navbar-end .navbar-item:last-child {
    padding-bottom: 1rem;
  }
}
</style>
