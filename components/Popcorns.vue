<template>
  <BulmaGrid :items="popcorns" itemsByRow="3" :itemKey="popcorn => popcorn.$slug">
    <template slot-scope="{item}">
      <PopcornCard :popcorn="item"/>
    </template>
  </BulmaGrid>
</template>

<script>
import PopcornCard from './PopcornCard'
import BulmaGrid from './BulmaGrid'
export default {
  components: {
    PopcornCard,
    BulmaGrid
  },
  props: {
    popcorns: {
      type: Array,
      required: true
    }
  }
}
</script>