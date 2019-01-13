<template>
  <section>
    <div
      id="timer-countdown"
      ref="timer">
      {{ currentTime }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      default: 10
    }
  },
  computed: {
    currentTime() {
      return 10
    }
  },
  mounted() {
    let self = this
    let timerDiv = this.$refs.timer
    let time = 5
    timerDiv.style.setProperty('--timer', `${time}s`)

    timerDiv.addEventListener('animationend', function() {
      self.animationEnd()
    })
  },
  methods: {
    animationEnd() {
      // Send to parent?
      // Or push from here?
      //this.$router.push('/explanation')
    }
  }
}
</script>

<style lang="scss" scoped>
#timer-countdown {
  height: 20px;
  background-color: red;
  animation-name: countdown;
  animation-duration: var(--timer);
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

@keyframes countdown {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>
