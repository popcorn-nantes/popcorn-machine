<template>
  <div>
    <BulmaNavigation/>
    <nuxt/>
    <BulmaFooter/>
  </div>
</template>

<script>
import BulmaNavigation from '../components/BulmaNavigation'
import BulmaFooter from '../components/BulmaFooter'

export default {
  components: {
    BulmaNavigation,
    BulmaFooter
  }
}
</script>


<style>
  body,
  #__nuxt,
  #__layout,
  #__layout > div {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  main .content a:not(.button) {
    color: hsl(0, 0%, 21%);
    text-decoration: underline;
  }

  .modal-content {
    width: 95%;
  }

  .button.is-warning,
  .has-background-warning {
    background-color: #F0D37A !important;
  }

  .button.is-danger,
  .has-background-danger {
    background-color: #D22321 !important;
  }

  .has-text-warning {
    color: #F0D37A !important;
  }

  .has-text-danger {
    color: #D22321 !important;
  }
</style>
