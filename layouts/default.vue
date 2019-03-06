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

  main .content a {
    color: #1496ed;
  }
</style>
