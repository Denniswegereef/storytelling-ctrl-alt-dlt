<template>
  <div @click="resetStory()">Reset story</div>
</template>

<script>
export default {
  methods: {
    resetStory() {
      console.log('reset')
      this.$store.commit('resetStory')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: red;
  cursor: pointer;
}
</style>
