<template>
  <section>
    <section>
      <h2>{{ currentQuestion.question }}</h2>

      <img
        :src="image"
        alt="image">

      <div class="question_answers">
        <answerButton
          :current-question="currentQuestion.question"
          :possible-answers="currentQuestion.possibleAnswers"/>
      </div>
    </section>

    <resetStory/>
  </section>
</template>

<script>
import questionBullets from '~/components/questionBullets.vue'
import answerButton from '~/components/answerButton.vue'
import questionTimer from '~/components/questionTimer.vue'
import resetStory from '~/components/resetStory.vue'

export default {
  validate({ params, store }) {
    // Validate if question exists otherwise send to error
    let validate = store.state.jsonData.questions.some(question => {
      if (question.id === Number(params.id)) {
        return true
      }
    })
    return validate
  },
  components: {
    questionBullets,
    answerButton,
    questionTimer,
    resetStory
  },
  data() {
    return {
      currentQuestion: '',
      image: ''
    }
  },
  mounted() {
    // Set params and ID's
    let currentParam = this.$route.params.id

    // Find question for current page
    this.currentQuestion = this.$store.state.jsonData.questions.find(
      question => question.id === Number(currentParam)
    )
    this.image = require(`~/assets/images/1.jpg`)
    ///
  }
  // transition: 'bounce'
}
</script>

<style lang="scss" scoped>
img {
  height: 200px;
  margin: 0 auto;
}
h1 {
  span {
    color: red;
  }
}

section {
  margin-bottom: 10px;
}
</style>
