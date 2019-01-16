<template>
  <section class="container">
    <!-- header -->
    <smallHeader :header-text="'Overzicht'"/>
    <div class="body-container">
      <p class="intro">Je bent klaar! Scroll verder om jouw scenario te bekijken</p>
      <div
        v-for="(questionAnswer, index) in $store.state.questionsAnswered"
        :key="index"
        class="overview-single">
        <hr>
        <h2>{{ questionAnswer.q }}</h2>
        <h3>Jouw antwoord</h3>
        <h3>{{ questionAnswer.a }}</h3>
        <div
          v-if="checkAvailable(questionAnswer.id)"
          class="insight">
          <h2>{{ findInsight(questionAnswer.id) }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import json from 'static/insights.json'
import smallHeader from '~/components/small/smallHeader.vue'

export default {
  validate({ params, store }) {
    // Validate if question exists otherwise send to error
    if (store.state.jsonData === 'empty') {
      return true
    }
    return true
  },
  components: {
    smallHeader
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
  // margin-bottom: 40px;
  text-align: center;
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
.answer {
  margin-top: 20px;
}
.body-container {
  padding: var(--default-padding);
}
.overview-single {
  margin-bottom: 40px;
}
hr {
  width: 100%;
  margin: 20px 0;
}
</style>
