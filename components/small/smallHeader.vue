<template lang="html">
  <header>
    <!-- <img
      src="../../assets/images/home.png"
      alt="home-icon"> -->
    <h1>{{ headerText }}</h1>
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
  justify-content: space-around;
  align-items: center;
}
h1 {
  text-align: center;
  width: 100%;
  // transform: translateY(-30px);
  text-transform: uppercase;
}
</style>
