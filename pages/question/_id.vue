<template>
  <section>
    <section>
      current ID = {{ currentId }}
      Single question on this page
    </section>

    <section>
      This is question  {{ currentQuestion.id }}
      <h2>{{ currentQuestion.question }}</h2>

      <div class="question_answers">
        <answerButton
          :current-question="currentQuestion.question"
          :possible-answers="currentQuestion.possibleAnswers"/>
      </div>
    </section>

    <section class="question_timer">
      <questionTimer :time="json.timeQuestion"/>
    </section>

    <questionBullets/>
  </section>
</template>

<script>
import json from 'static/questions.json'

import questionBullets from '~/components/questionBullets.vue'
import answerButton from '~/components/answerButton.vue'
import questionTimer from '~/components/questionTimer.vue'

export default {
  validate({ params }) {
    // Validate if question exists otherwise send to error
    let validate = json.questions.some(question => {
      if (question.id === Number(params.id)) {
        return true
      }
    })
    return validate
  },
  components: {
    questionBullets,
    answerButton,
    questionTimer
  },
  data() {
    return {
      json,
      currentId: null,
      currentQuestion: 1
    }
  },
  mounted() {
    // Set params and ID's
    let currentParam = this.$route.params.id
    this.currentId = currentParam

    // Find question for current page
    this.currentQuestion = this.json.questions.find(
      question => question.id === Number(currentParam)
    )
  }
}
</script>

<style lang="scss" scoped>
h1 {
  span {
    color: red;
  }
}

section {
  margin-bottom: 10px;
}
</style>
