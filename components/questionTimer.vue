<template>
  <div>Gonna be timing {{ currentTime }}</div>
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
      currentTime: 0
    }
  },
  mounted() {
    this.currentTime = this.time

    // setInterval(function() {
    //   this.currentTime = 5
    //   console.log(this.currentTime)
    //   console.log('interval me bitch')
    // }, 1000)
  }
}
</script>

<style lang="scss" scoped>
</style>
