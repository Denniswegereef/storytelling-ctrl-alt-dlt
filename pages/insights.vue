<template>
  <div>
    <smallHeader :header-text="'Wist je dat?'"/>
    <section class="container">
      <div
        v-for="insight in insights.insights"
        :key="insight.id">
        <p>{{ insight.insight }}</p>
        <hr>
      </div>
      <bigButton
        :text="'Terug naar overzicht'"
        :to="'/story-overview'"/>
    </section>
  </div>
</template>

<script>
import smallHeader from '~/components/small/smallHeader.vue'
import bigButton from '~/components/small/bigButton.vue'
import insights from '~/static/insights.json'

export default {
  components: {
    smallHeader,
    bigButton
  },
  data() {
    return {
      insights
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 var(--default-padding);
}
</style>
