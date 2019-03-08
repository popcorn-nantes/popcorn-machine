<template>
  <div class="field has-text-centered">
    <p class="control has-icons-left">
      <input
        id="search"
        class="input is-medium is-flat"
        :value="value"
        @input="$emit('input', $event.target.value)"
        type="text"
        placeholder="Cherchez par domaine (site web, application mobile, boutique...) ou technologie (React, WordPress, Java, PHP ... )"
      >
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
