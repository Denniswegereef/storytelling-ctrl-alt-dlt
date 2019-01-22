<template>
  <section class="container">
    <!-- popup -->
    <div
      v-if="popModalState"
      class="pop-up">
      <div class="pop-up-inner">
        <h2>Delen</h2>
        <p>{{ currentInsight }}</p>
        <div class="icon-container">
          <div>
            <img
              src="../assets/images/facebook.png"
              alt="facebook-icon">
          </div>
          <div>
            <img
              src="../assets/images/snapchat.png"
              alt="facebook-icon">
          </div>
          <div>
            <img
              src="../assets/images/twitter.png"
              alt="facebook-icon">
          </div>
          <div>
            <img
              src="../assets/images/whatsapp.png"
              alt="facebook-icon">
          </div>
        </div>
        <div class="pop-up-button-holder">
          <smallButton
            :text="'Annuleer'"
            @click.native="goBack()"/>
        </div>
      </div>
    </div>
    <!-- header -->
    <smallHeader
      :header-text="'Overzicht'"
      @togglePop="toggleModal"/>
    <div class="body-container">
      <!-- <p class="intro">Je bent klaar! Scroll verder om jouw scenario te bekijken</p> -->
      <!-- <hr> -->
      <div
        v-for="(questionAnswer, index) in $store.state.questionsAnswered"
        :key="index"
        class="overview-single">
        <div v-if="checkAvailable(questionAnswer.id)">
          <!-- scenario -->
          <h2>{{ questionAnswer.q }}</h2>
          <p class="small-header">Jouw antwoord</p>
          <p>{{ questionAnswer.a }}</p>
          <div
            v-if="checkAvailable(questionAnswer.id)"
            class="insight shine">
            <span>!</span>
            <div>
              <h2>wist je dat</h2>
              <h2>{{ findInsight(questionAnswer.id) }}</h2>
              <img
                src="../assets/images/share.png"
                alt="share-icon"
                @click="shareInsight(findInsight(questionAnswer.id))">
            </div>
          </div>
          <hr>
          <!-- einde scenario -->
        </div>
      </div>
      <!-- <hr> -->
      <bigButton
        :text="'Begin opnieuw'"
        @click.native="resetStore()"/>
      <bigButton
        :text="'Deel de app'"
        @click.native="shareApp('Deel de app met al je vrienden en familie')"/>
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
import smallButton from '~/components/small/smallButton.vue'

export default {
  validate({ params, store }) {
    // Validate if question exists otherwise send to error
    if (store.state.jsonData === 'empty') {
      return false
    }
    return true
  },
  components: {
    smallButton,
    smallHeader,
    bigButton
  },
  data() {
    return {
      json,
      popModalState: false,
      currentInsight: ''
    }
  },
  methods: {
    checkAvailable(id) {
      if (this.json.insights.find(x => x.id === id)) {
        return true
      }
      return false
    },
    toggleModal() {
      this.popModalState = true
    },
    goBack() {
      this.currentInsight = ''
      this.popModalState = false
    },
    findInsight(id) {
      let find = this.json.insights.find(x => x.id === id)
      return find.insight
    },
    resetStore() {
      this.$store.commit('resetStory')
      this.$router.push('/')
    },
    shareInsight(insight) {
      this.currentInsight = insight
      this.popModalState = true
      console.log(insight)
    },
    shareApp(text) {
      this.popModalState = true
      this.currentInsight = text
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
  min-height: 100px;
  padding: 10px 0;
  position: relative;
  width: calc(100% + 70px);
  left: 0;
  background-color: var(--second-color);
  // padding: 0 var(--default-padding);
  padding-right: var(--default-padding);
  display: flex;
  align-items: center;
  margin-top: var(--default-margin);
  margin-left: -35px;
  overflow: hidden;
  img {
    width: 29px;
    position: absolute;
    right: 13px;
    top: 10px;
  }
  // transform: translateX(-35px);
  h2 {
    margin-left: var(--default-padding);
  }
  h2:first-child {
    text-transform: uppercase;
  }
  div {
    max-width: 270px;
  }
  span {
    margin-left: var(--default-padding);
  }
}
.answer {
  margin-top: 20px;
}
.body-container {
  padding: 20px var(--default-padding);
}
.small-header {
  margin-top: var(--default-margin);
  font-weight: bold;
}
span {
  font-size: 70px;
  margin-left: 5px;
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
    min-height: 200px;
    width: 80%;
    max-width: 450px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    padding: 30px;
    h2 {
      text-align: center;
      margin-bottom: var(--default-margin);
    }
    p {
      padding: 0;
      margin-bottom: 20px;
    }
  }
  &-button-holder {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}

.shine {
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    width: 200%;
    height: 300%;
    transform: rotate(30deg);
    background: rgba(255, 255, 255, 0.13);
    // animation-property: left, top, opacity;
    animation-duration: 0.7s, 0.7s, 0.15s;
    animation-timing-function: ease;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: shine 7s infinite;
  }
  &:hover:after {
    opacity: 1;
    top: 110%;
    left: 110%;
  }
}

.shine:active:after {
  opacity: 0;
}

@keyframes shine {
  0% {
    opacity: 1;
    top: -100%;
    left: -210%;
  }
  70% {
    opacity: 1;
    top: -100%;
    left: -210%;
  }
  100% {
    opacity: 1;
    top: 90%;
    left: 110%;
  }
}

.icon-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  div {
    background-color: var(--second-color);
    border-radius: 7px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: var(--second-color-dark);
    }
    :active {
      background-color: var(--second-color-dark);
    }
    img {
      width: 70%;
    }
  }
}
</style>
