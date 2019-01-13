<template>
  <section class="container">
    <h1>Welcome to the story</h1>
    <nuxt-link to="/explanation">Go to explanation</nuxt-link>
    <questionTimer/>
  </section>
</template>

<script>
import questionTimer from '~/components/questionTimer.vue'

export default {
  components: {
    questionTimer
  }
}
</script>

<style lang="scss" scoped>
</style>
