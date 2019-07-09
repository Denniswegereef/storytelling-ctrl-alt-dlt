<template>
  <section class="answer-buttons">
    <bigButton
      v-for="answer in possibleAnswers"
      :key="answer.goId"
      :text="answer.answer"
      :button-type="'answer-button'"
      @click.native="goNextQuestion(answer)"/>
  </section>
</template>

<script>
import bigButton from '~/components/small/bigButton.vue'

export default {
  components: {
    bigButton
  },
  props: {
    force: {
      type: Boolean,
      default: false
    },
    nextRandom: {
      type: Object,
      default: () => {}
    },
    currentQuestion: {
      type: String,
      default: 'no question yet'
    },
    currentId: {
      type: Number,
      default: 0
    },
    possibleAnswers: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    force() {
      if (this.force) {
        console.log(this.$props.nextRandom.answer)
        this.highLightItem()
        setTimeout(() => {
          this.goNextQuestion(this.$props.nextRandom)
        }, 1500)
      }
    }
  },
  mounted() {
    let items = document.getElementsByClassName('answer-button')

    Array.prototype.forEach.call(items, item => {
      if (item.innerText.toLowerCase() === 'klaar') {
        let element = document.getElementById('timer-countdown')
        element.parentNode.removeChild(element)
        item.style.opacity = '0'

        setTimeout(() => {
          item.style.opacity = '1'
        }, 3500)
      }
    })
  },
  methods: {
    highLightItem() {
      let items = document.getElementsByClassName('answer-button')

      Array.prototype.forEach.call(items, item => {
        if (item.innerText === this.$props.nextRandom.answer) {
          item.classList.add('selected')
        }
      })
    },
    goNextQuestion(answer) {
      // Send question + answer to the vuex store
      const question = {
        id: this.currentId,
        q: this.currentQuestion,
        a: answer.answer
      }

      this.$store.commit('addQuestion', question)

      // Pushing routers
      if (answer.goId === 'end') {
        this.$store.commit('nextEnding', answer.ending)
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
            this.$store.commit('nextQuestion', answer.randomId[index])
            this.$router.push(`/question/${answer.randomId[index]}`)
          }
        })
        return
      }

      // Just push regular route
      if (answer.insight) {
        this.$parent.showPopUp()
        this.$parent.loadText(answer.insight, answer.goId)
        let element = document.getElementById('timer-countdown')
        element.parentNode.removeChild(element)
      } else {
        this.$store.commit('nextQuestion', answer.goId)

        this.$router.push(`/question/${answer.goId}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.answer-buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 var(--default-padding);
}
button {
  font-size: 17px;
}
</style>
