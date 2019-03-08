<template>
  <div class="field has-text-centered">
    <p class="control has-icons-left">
      <input
        aria-label="Rechercher un développeur par mot-clef"
        id="search"
        class="input is-medium is-flat"
        :value="value"
        @input="$emit('input', $event.target.value)"
        type="text"
        placeholder="Site, Boutique, Application mobile, React, WordPress, Java, PHP ..."
      />
      <span class="icon is-small is-left"><i class="fas fa-search"></i></span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
p.control {
  display: inline-block;
  width: 100%;
  max-width: 900px;
}
</style>
