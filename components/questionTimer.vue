<template>
  <section>
    <div id="timer-holder">
      <div
        id="timer-countdown"
        ref="timer">
        .
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    let self = this
    let timerDiv = this.$refs.timer
    let time = this.$store.state.jsonData.timeQuestion
    timerDiv.style.setProperty('--timer', `${time}s`)

    timerDiv.addEventListener('animationend', function() {
      self.animationEnd()
    })
  },
  methods: {
    animationEnd() {
      this.$emit('clicked', 'nextQuestion')
    }
  }
}
</script>

<style lang="scss" scoped>
#timer {
  &-holder {
    height: 20px;
    width: 100%;
    overflow: hidden;
  }
  &-countdown {
    background-color: red;
    animation-name: countdown;
    animation-duration: var(--timer);
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }
}

@keyframes countdown {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
