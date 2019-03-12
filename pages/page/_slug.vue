<template>
  <div class="section">
    <div class="container ">
      <div v-if="page" class="content" v-html="page.$html"></div>
      <div v-else>Désolé, cette page n'existe pas ou a été dépubliée. 😭</div>
    </div>
  </div>
</template>

<script>
import { getPageBySlug } from '@/services/content'

export default {
  computed: {
    page() {
      return getPageBySlug(this.$route.params.slug)
    }
  }
}
</script>
