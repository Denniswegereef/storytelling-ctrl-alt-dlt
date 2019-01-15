<template>
  <section>
    <div id="timer-holder">
      <div
        id="timer-countdown"
        ref="timer">
        {{ currentTime }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    currentTime() {
      return 10
    }
  },
  mounted() {
    let self = this
    let timerDiv = this.$refs.timer
    let time = 15
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
