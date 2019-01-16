<template>
  <section>
    <h1>Explenation of the app</h1>
    <nuxt-link to="/question/1">Start</nuxt-link>
  </section>
</template>

<script>
import json from 'static/questions.json'

export default {
  data() {
    return {
      json
    }
  },
  mounted() {
    this.$store.commit('addJson', this.json)
  }
}
</script>
