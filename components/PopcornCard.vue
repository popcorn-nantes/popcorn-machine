<template>
  <div class="popcorn" :id="`popcorn-${popcorn.$slug}`">
    <a :href="popcorn.url">
      <div class="card">
        <PhotoCard :imageUrl="popcorn.image">
          <span class="title is-2">{{ popcorn.name }}</span>
        </PhotoCard>
      </div>
    </a>
  </div>
</template>

<script>
import PhotoCard from './PhotoCard'

export default {
  components: { PhotoCard },
  props: {
    popcorn: {
      type: Object,
      required: true
    }
  }
}
</script>
