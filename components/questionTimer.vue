<template>
  <section>
    <div>Gonna be timing {{ currentTime }}</div>
    <div
      id="timer-countdown"
      :style="{ width: timerWidth }"/>
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
  data() {
    return {
      currentTime: 0,
      timerWidth: '100%'
    }
  },
  mounted() {
    // setInterval(function() {
    //   console.log(this.timerWidth)
    //   this.timerWidth = '20%'
    // }, 1000)
  }
}
</script>

<style lang="scss" scoped>
#timer-countdown {
  height: 20px;
  background-color: red;
  transition: 1s all;
}
</style>
