<template lang="html">
  <header>
    <img
      src="../assets/images/home.png"
      alt="home-icon"
      @click="onClickButton">
    <h2>{{ headerText }}</h2>
  </header>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
      default: 'DIT IS EEN DEFAULT'
    }
  },
  methods: {
    onClickButton() {
      this.$emit('togglePop', 'someValue')
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 30px;
  height: 30px;
  z-index: 20;
  position: absolute;
  top: 15px;
  left: 15px;
}
header {
  background-color: var(--default-color);
  width: 100%;
  height: 240px;
  padding: var(--default-padding);
  position: relative;
  display: flex;
}
h2 {
  color: var(--black-color);
  margin-top: 1rem;
  font-size: 19px;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
