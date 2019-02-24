<template>
  <div class="photo-card card-image">
    <div class="photo-container">
      <img class="photo" v-lazy="imageUrl" alt="">
    </div>
    <div v-if="!!this.$slots.default" class="legend">
      <p class="legend-title">
        <slot/>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    legend: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.card-image {
  position: relative;
}
.photo-container {
  height: 300px;
}
.photo {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.legend {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.legend-title {
  text-align: center;
  color: white;
  padding: 0.8rem;
  background-color: rgba(0, 0, 0, 0.6);
}
.legend-title .title {
  color: white;
}
</style>
