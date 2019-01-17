<template lang="html">
  <header>
    <h1>{{ headerText }}</h1>
    <img
      src="../../assets/images/share.png"
      alt="share-icon"
      @click="onClickButton">
  </header>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
      default: 'DEFAULT'
    }
  },
  methods: {
    clickHandle() {
      console.log(click)
    },
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
}
header {
  background-color: var(--default-color);
  width: 100%;
  height: 90px;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
}
h1 {
  text-align: center;
  width: 100%;
  // transform: translateY(-30px);
  text-transform: uppercase;
  position: absolute;
  left: 0;
}
</style>
