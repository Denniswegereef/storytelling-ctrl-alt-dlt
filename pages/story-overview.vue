<template>
  <section class="container">
    <!-- header -->
    <h2 class="intro">Je bent klaar! Scroll verder om jouw scenario te bekijken</h2>

    <div
      v-for="(questionAnswer, index) in $store.state.questionsAnswered"
      :key="index"
      class="overview-single">
      <h2>{{ questionAnswer.q }}</h2>
      <p>Jouw antwoord</p>
      <h3>{{ questionAnswer.a }}</h3>

      <div
        v-if="checkAvailable(questionAnswer.id)"
        class="insight">
        <h2>{{ findInsight(questionAnswer.id) }}</h2>
      </div>
    </div>

  </section>
</template>

<script>
import json from 'static/insights.json'

export default {
  validate({ params, store }) {
    // Validate if question exists otherwise send to error
    if (store.state.jsonData === 'empty') {
      return false
    }
    return true
  },
  data() {
    return {
      json
    }
  },
  methods: {
    checkAvailable(id) {
      if (this.json.insights.find(x => x.id === id)) {
        return true
      }
      return false
    },
    findInsight(id) {
      let find = this.json.insights.find(x => x.id === id)
      return find.insight
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  margin-bottom: 40px;
}
section {
  margin-bottom: 20px;
}
.insight {
  height: 100px;
  width: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: #fff;
  }
}

.overview-single {
  margin-bottom: 40px;
}
</style>
