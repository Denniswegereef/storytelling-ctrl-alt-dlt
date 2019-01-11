<template>
  <section class="answer-buttons">
    <smallButton
      v-for="answer in possibleAnswers"
      :key="answer.goId"
      :text="answer.answer"
      @click.native="goNextQuestion(answer)"/>
  </section>
</template>

<script>
import smallButton from '~/components/small/button.vue'

export default {
  components: {
    smallButton
  },
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

      // Random function
      if (answer.goId === 'random') {
        const n = Math.random()
        let rolled = false
        console.log('Rolled percentage ' + Math.round(n * 100))

        // Loop throught everything lowest first
        answer.changes.forEach((number, index) => {
          const currentPercent = number / 100
          if (n < currentPercent && !rolled) {
            rolled = true
            this.$router.push(`/question/${answer.randomId[index]}`)
          }
        })
        return
      }

      // Just push regular router
      this.$router.push(`/question/${answer.goId}`)
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
