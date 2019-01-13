<template>
  <section>
    <h1>Hier is je scenario</h1>
    <p>{{ contextData }}</p>
    <nuxt-link to="1">
      go to first question
    </nuxt-link>
  </section>
</template>

<script>
import smallButton from '~/components/small/button.vue'

export default {
  validate({ params, query, store }) {
    // Check if contextScenario's exists
    if (Number.isInteger(store.state.jsonData.contextScenario.length)) {
      return true
    }
    return false
  },
  components: {
    smallButton
  },
  computed: {
    roll() {
      return Math.floor(
        Math.random() * this.$store.state.jsonData.contextScenario.length
      )
    },
    contextData() {
      return this.$store.state.jsonData.contextScenario[this.roll]
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
