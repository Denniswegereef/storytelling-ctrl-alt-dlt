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
      // let seconds = 10
      //
      // return function decreaseTimer() {
      //   seconds--
      //   console.log(seconds)
      //   if (seconds === 0) {
      //     return 'DONE'
      //     clearInterval(intervalID)
      //   }
      // }
      //
      // setInterval(this.decreaseTimer(), 1000)
    }
  },
  mounted() {
    console.log(this.$refs.timer)
    // setInterval(function() {
    //   console.log('TICK TICK')
    // }, 1000)
  }
}
</script>

<style lang="scss" scoped>
#timer-countdown {
  height: 20px;
  background-color: red;
  animation-name: countdown;
  animation-duration: 10s;
  animation-delay: 2s;
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
