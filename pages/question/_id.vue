<template>
  <section>
    <section>
      current ID = {{ currentId }}
      Single question on this page
    </section>

    <section>
      This is question  {{ currentQuestion.id }}
      {{ currentQuestion.question }}

      <div class="question_answers">

        <nuxt-link
          v-for="answer in currentQuestion.possibleAnswers"
          :key="answer.goId"
          :to="`/question/${answer.goId}`">
          {{ answer.answer }}
        </nuxt-link>
      </div>
    </section>
  </section>
</template>

<script>
import json from 'static/questions.json'

export default {
  validate({ params }) {
    // Validate if question exists otherwise send to error
    return isNaN(params.id) ? false : true
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

<style lang="scss">
h1 {
  span {
    color: red;
  }
}

section {
  margin-bottom: 10px;
}
.question_answers {
  margin-top: 20px;
  display: flex;
  width: 400px;
  justify-content: space-around;
}
</style>
