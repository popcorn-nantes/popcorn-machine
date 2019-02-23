<template>
  <div class="card-image">
    <div class="photo-container">
      <img class="photo" :src="popcorn.image">
      <div class="name name-overlay"></div>
    </div>
    <h2 class="name title is-3">{{popcorn.name}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    popcorn: {
      type: Object,
      required: true
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
.name {
  text-align: center;
  height: 60px;
  padding: 8px;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
}
.name-overlay {
  background: black;
  opacity: 0.6;
}
</style>
