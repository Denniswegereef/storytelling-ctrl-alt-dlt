<template lang="html">
  <header>
    <a href="">
      <img
        src="../assets/images/home.png"
        alt="home-icon">
    </a>
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
    clickHandle() {
      console.log(click)
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
  height: 200px;
  padding: 1.5rem;
}
h2 {
  margin-top: 0.5rem;
}
</style>
