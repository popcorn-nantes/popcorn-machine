<template>

  <header>
    <nav class="navbar is-light has-shadow is-spaced">
      <div class="container">
        <div class="navbar-brand">
        <span class="navbar-item">
          <strong>
            <nuxt-link class="has-text-dark is-size-4" to="/">POPCORN 🍿 <span class="navbar-location is-size-6">{{ location }}</span></nuxt-link>
          </strong>
        </span>
          <div
              @click="showOnMobile = !showOnMobile"
              :class="{'is-active': showOnMobile}"
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
        <div id="app-menu" class="navbar-menu" :class="{'is-active': showOnMobile}">
          <div class="navbar-end">
            <nuxt-link @click.native="showOnMobile = false" to="/" class="navbar-item">Accueil</nuxt-link>
            <nuxt-link
                @click.native="showOnMobile = false"
                to="/page/a-propos"
                class="navbar-item"
            >En savoir plus</nuxt-link>
            <nuxt-link
                @click.native="showOnMobile = false"
                to="/popcorns"
                class="navbar-item"
            >Annuaire des Popcorns</nuxt-link>
            <span class="navbar-item">
          <nuxt-link
              @click.native="showOnMobile = false"
              to="/page/inscription"
              class="button is-danger has-text-dark"
          >Freelance ? Inscription</nuxt-link>
        </span>
            <div class="navbar-item">
              <div class="button is-dark" @click="showModal = true">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div v-if="showModal" class="modal" :class="{'is-active': showModal}">
        <div class="modal-background" @click="showModal = false"></div>
        <div class="modal-content has-text-centered">
          <div class="box">
            <PopcornContact/>
          </div>
        </div>
        <button @click="showModal = false" class="modal-close is-large" aria-label="fermer"></button>
      </div>
    </div>
  </header>

</template>

<script>
    import PopcornContact from '../components/PopcornContact'
    export default {
        components: {
            PopcornContact,
        },
        computed: {
            location: () => process.env.POPCORN_LOCATION,
        },
        data() {
            return {
                showModal: false,
                showOnMobile: false
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
  .navbar-item:hover {
    color: #363636;
  }
  .navbar-location {
    position: absolute;
    bottom: -40%;
    right: 5px;
    white-space: nowrap;
    z-index: 1;
    transform: rotate(-2deg);
    text-shadow: 0 0 10px hsl(0, 0%, 60%);
    color: #D22321;
  }

  .button.is-danger {
    background-color: #D22321;
    color: white !important;
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
