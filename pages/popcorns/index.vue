<template>
  <main>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-dark is-size-3">
            Les autres Popcorns en France
          </h1>
          <h2 class="subtitle has-text-dark is-size-5">
            Trouvez un Popcorn près de chez vous !
          </h2>
        </div>
      </div>
    </section>

    <div class="section">
      <div class="container">
        <BulmaGrid
          :items="popcorns"
          itemsByRow="3"
          :itemKey="popcorn => popcorn.$slug"
        >
          <template slot-scope="{ item }">
            <PopcornCard :popcorn="item" />
          </template>
        </BulmaGrid>
      </div>
    </div>
  </main>
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
