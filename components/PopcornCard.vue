<template>
  <div class="popcorn" :id="`popcorn-${popcorn.$slug}`">
    <a target="_blank" :href="popcorn.url" class="card">
      <PopcornCardPhoto :popcorn="popcorn"/>
    </a>
  </div>
</template>

<script>
import PopcornCardPhoto from './PopcornCardPhoto'

export default {
  components: { PopcornCardPhoto },
  props: {
    popcorn: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card:hover {
  transition: all 0.2s ease-in-out;
  top: -5px;
  box-shadow: 0 2px 20px;
  cursor: pointer;
}
.card {
  height: 100%;
  position: relative;
  transition: all 0.3s ease-in-out;
  top: 0;
}
</style>
