<template>
  <div class="container section">
    <Popcorns :popcorns="popcorns"/>
  </div>
</template>

<script>
import Popcorns from '@/components/Popcorns'
import { getPopcorns } from '@/services/content'

export default {
  components: {
    Popcorns
  },
  computed: {
    popcorns() {
      return getPopcorns()
    }
  }
}
</script>
