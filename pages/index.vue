<template>
  <section class="container">
    <!-- <smallHeader :header-text="'DIT IS DE DYNAMISCHE TEKST'"/> -->
    <h1>Welcome to the story</h1>
    <nuxt-link to="/explanation">Go to explanation</nuxt-link>
  </section>
</template>

<script>
import smallHeader from '~/components/smallHeader.vue'

export default {
  components: {
    smallHeader
  }
}
</script>

<style lang="scss" scoped>
// h1 {
//   color: var(--default-color);
// }
</style>
