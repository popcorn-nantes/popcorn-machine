<template>
  <div>
    <BulmaNavigation />
    <nuxt />
    <BulmaFooter />
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
  max-width: 640px;
}

.button.is-warning,
.has-background-warning {
  background-color: #f0d37a !important;
}

.button.is-danger,
.has-background-danger {
  background-color: #d22321 !important;
}

.has-text-warning {
  color: #f0d37a !important;
}

.has-text-danger {
  color: #d22321 !important;
}
</style>
