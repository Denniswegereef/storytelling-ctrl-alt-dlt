<template>
  <section>
    <div
      v-if="popModalState"
      class="pop-up">
      <div class="pop-up-inner">
        <h2>Weet je zeker dat je wilt stoppen?</h2>
        <div class="pop-up-button-holder">
          <smallButton
            :text="'Nee'"
            @click.native="continueStory()"/>
          <smallButton
            :text="'Ja'"
            @click.native="quitStory()"/>
        </div>
      </div>
    </div>

    <div
      v-if="showPopUpInsight"
      class="pop-up-modal"
      @click="goNextQuestionPls">
      <div class="pop-up-modal__inner">
        <h2>Wist je dat!</h2>
        <p>{{ insightText }}</p>
        <button @click="goNextQuestionPls">Ga verder</button>
      </div>
    </div>

    <section>
      <bigHeader
        :header-text="currentQuestion.question"
        @togglePop="toggleModal"/>
      <transition name="layout">
        <div class="container">
          <div class="img-container">
            <img
              :src="image"
              alt="image">
            <div class="timer-container">
              <questionTimer
                @clicked="nextQuestion"/>
            </div>
          </div>
          <div
            :id="'slide'">
            <answerButton
              :current-question="currentQuestion.question"
              :current-id="currentQuestion.id"
              :possible-answers="currentQuestion.possibleAnswers"
              :next-random="nextQuestionRandom"
              :force="forceNext"/>
          </div>
        </div>
      </transition>
    </section>
  </section>
</template>

<script>
import questionBullets from '~/components/questionBullets.vue'
import answerButton from '~/components/answerButton.vue'
import questionTimer from '~/components/questionTimer.vue'
import resetStory from '~/components/resetStory.vue'
import smallButton from '~/components/small/smallButton.vue'
import bigHeader from '~/components/bigHeader.vue'
import json from 'static/insights.json'

export default {
  validate({ params, store }) {
    // Validate if question exists otherwise send to error
    let validate = store.state.jsonData.questions.some(question => {
      if (question.id === Number(params.id)) {
        if (params.id == store.state.nextQuestion) {
          return true
        }
      }
    })
    return validate
  },
  components: {
    smallButton,
    questionBullets,
    answerButton,
    questionTimer,
    resetStory,
    bigHeader
  },
  json,
  data() {
    return {
      forceNext: false,
      popModalState: false,
      showPopUpInsight: false,
      insightText: null,
      nextQuestionID: 0
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
      return require(`~/assets/images/${this.currentQuestion.id}.gif`)
    }
  },
  mounted() {
    const insightNumber = 2

    //    console.log(insight)
  },
  methods: {
    showPopUp() {
      this.showPopUpInsight = true
    },
    loadText(insightNumber, answerGoId) {
      let insight = json.insights.find(insight => {
        return insight.id == insightNumber
      })
      this.insightText = insight.insight
      this.nextQuestionID = answerGoId
    },
    nextQuestion(value) {
      this.forceNext = true
    },
    toggleModal() {
      this.popModalState = true
    },
    continueStory() {
      this.popModalState = false
    },
    quitStory() {
      this.$store.commit('resetStory')
      this.$store.commit('nextQuestion', 1)
      this.$router.push('/')
    },
    goNextQuestionPls() {
      this.$store.commit('nextQuestion', this.nextQuestionID)
      this.$router.push(`/question/${this.nextQuestionID}`)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  border-style: none;
  border-radius: 7px;
  color: var(--black-color);
  min-height: 30px;
  width: 125px;
  background-color: var(--default-color);
  margin: 0 10px;
  transition: all 0.2s;
  display: block;
  margin: 2rem auto 0 auto;
  &:hover {
    transform: scale(1.1);
    background-color: var(--default-color-dark);
  }
}

.pop-up-modal {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  &__inner {
    max-width: 35rem;
    width: 80%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 2rem;
    background-color: #000;

    h2 {
      color: #fff;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    p {
      text-align: center;
      color: #fff;
    }
  }
}
img {
  width: 100%;
  // position: absolute;
  // transform: translateY(-40px);
  // margin-left: auto;
  // margin-right: auto;
  // left: 0;
  // top: 10rem;
  // right: 0;
}
.img-container {
  padding: 0 var(--default-padding);
}
h1 {
  span {
    color: red;
  }
}
.timer-container {
  transform: translateY(-4px);
}
section {
  margin-bottom: 10px;
}
.container {
  transform: translateY(-30px);
}
.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  &-inner {
    background-color: var(--black-color);
    height: 200px;
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    h2 {
      text-align: center;
      padding-bottom: var(--default-padding);
    }
  }
  &-button-holder {
    display: flex;
    justify-content: center;
  }
}
// Layout transitions
.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.layout-enter,
.layout-leave-active {
  opacity: 0;
  transform: translateY(-30px);
}
// Page transitions
.page-enter-active,
.page-leave-active {
  transform: translateY(0);
  transition: all 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
#slide {
  // position: absolute;
  // transform: translateX(-350px);
  opacity: 0;
  // width: 100px;
  // height: 100px;
  // background: blue;

  -webkit-animation: slide 0.1s forwards;
  //-webkit-animation-delay: 2s;
  // animation-delay: 1.5s;
  // animation: slide 1s forwards;
}
@-webkit-keyframes slide {
  100% {
    // transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes slide {
  100% {
    // transform: translateX(0px);
    opacity: 1;
  }
}
</style>
