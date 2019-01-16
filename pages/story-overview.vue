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
        <!-- scenario -->
        <h2>{{ questionAnswer.q }}</h2>
        <p class="small-header">Jouw antwoord</p>
        <p>{{ questionAnswer.a }}</p>
        <div
          v-if="checkAvailable(questionAnswer.id)"
          class="insight">
          <h2>{{ findInsight(questionAnswer.id) }}</h2>
        </div>
      </div>
      <bigButton
        :text="'Bekijk alle weetjes'"
        :to="'/insights'"/>
    </div>
  </section>
</template>

<script>
import json from 'static/insights.json'
import smallHeader from '~/components/small/smallHeader.vue'
import bigButton from '~/components/small/bigButton.vue'

export default {
  validate({ params, store }) {
    // Validate if question exists otherwise send to error
    if (store.state.jsonData === 'empty') {
      return false
    }
    return true
  },
  components: {
    smallHeader,
    bigButton
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
  width: 100vw;
  background-color: var(--second-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  transform: translateX(-35px);
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
.small-header {
  margin-top: var(--default-margin);
  font-weight: bold;
}
</style>
