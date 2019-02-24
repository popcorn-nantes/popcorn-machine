<template>
  <div class="popcorn" :id="`popcorn-${popcorn.$slug}`">
    <a :href="popcorn.url">
      <BulmaCardHoverEffect>
        <div class="card">
          <PhotoCard :imageUrl="popcorn.image">
            <span class="title is-2">{{popcorn.name}}</span>
          </PhotoCard>
        </div>
      </BulmaCardHoverEffect>
    </a>
  </div>
</template>

<script>
import PhotoCard from './PhotoCard'
import BulmaCardHoverEffect from './BulmaCardHoverEffect'

export default {
  components: { PhotoCard, BulmaCardHoverEffect },
  props: {
    popcorn: {
      type: Object,
      required: true
    }
  }
}
</script>
