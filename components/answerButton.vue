<template>
  <section class="answer-buttons">
    <a
      v-for="answer in possibleAnswers"
      :key="answer.goId"
      @click="goNextQuestion(answer)">
      {{ answer.answer }}
    </a>
  </section>
</template>

<script>
export default {
  props: {
    currentQuestion: {
      type: String,
      default: 'no question yet'
    },
    possibleAnswers: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goNextQuestion(answer) {
      // Send question + answer to the vuex store
      const question = {
        q: this.currentQuestion,
        a: answer.answer
      }
      this.$store.commit('addQuestion', question)

      // Pushing routers
      if (answer.goId === 'end') {
        this.$router.push('/story-overview')
        return
      }
      this.$router.push(`/question/${answer.goId}`)

      console.log(`Pushing router to ${answer.goId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.answer-buttons {
  width: 100%;
  display: flex;
}

a {
  color: #fff;
  background-color: blue;
  padding: 10px 15px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: darkBlue;
  }
}
</style>
