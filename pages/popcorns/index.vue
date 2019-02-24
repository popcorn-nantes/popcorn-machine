<template>
  <div class="container has-text-centered">
    <div class="section">
      <h1 class="title">Les autres Popcorn en France</h1>
      <h2 class="subtitle">Trouvez un popcorn près de chez vous !</h2>
    </div>

    <div class="section">
      <BulmaGrid :items="popcorns" itemsByRow="3" :itemKey="popcorn => popcorn.$slug">
        <template slot-scope="{item}">
          <PopcornCard :popcorn="item"/>
        </template>
      </BulmaGrid>
    </div>
  </div>
</template>

<script>
import { getPopcorns } from '@/services/content'
import PopcornCard from '@/components/PopcornCard'
import BulmaGrid from '@/components/BulmaGrid'

export default {
  components: {
    PopcornCard,
    BulmaGrid
  },
  computed: {
    popcorns() {
      return getPopcorns()
    }
  }
}
</script>
