<template>
  <div class="card-image">
    <div class="photo-container">
      <img class="photo" v-lazy="'/public' + person.photo">
      <div class="name name-overlay"></div>
    </div>
    <p class="name">{{person.prenom}} {{person.nom}}</p>
  </div>
</template>

<script>
export default {
  props: {
    person: {
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
  height: 40px;
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