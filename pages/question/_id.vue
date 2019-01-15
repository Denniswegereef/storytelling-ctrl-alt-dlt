<template>
  <section>
    <section>
      <bigHeader :header-text="currentQuestion.question"/>

      <div class="img-container">
        <img
          :src="image"
          alt="image">

        <questionTimer
          @clicked="nextQuestion"/>
      </div>

      <div class="question_answers">
        <answerButton
          :current-question="currentQuestion.question"
          :current-id="currentQuestion.id"
          :possible-answers="currentQuestion.possibleAnswers"
          :next-random="nextQuestionRandom"
          :force="forceNext"/>
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
import bigHeader from '~/components/bigHeader.vue'

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
    resetStory,
    bigHeader
  },
  data() {
    return {
      forceNext: false
    }
  },
  computed: {
    currentParam() {
      return this.$route.params.id
    },
    currentQuestion() {
      return this.$store.state.jsonData.questions.find(
        question => question.id === Number(this.currentParam)
      )
    },
    nextQuestionRandom() {
      let random = Math.floor(
        Math.random() * this.currentQuestion.possibleAnswers.length
      )
      return this.currentQuestion.possibleAnswers[random]
    },
    image() {
      return require(`~/assets/images/${this.currentQuestion.id}.jpg`)
    }
  },
  methods: {
    nextQuestion(value) {
      this.forceNext = true
    }
  }
  // transition: 'bounce'
}
</script>

<style lang="scss" scoped>
img {
  // height: 200px;
  // margin: var(--default-padding);
  width: 100%;
}

.img-container {
  padding: var(--default-padding);
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
