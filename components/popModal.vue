<template>
  <section
    v-if="show === true"
    class="pop-up">
    <h1>This is a pop-modal</h1>
    <p>Dit is tekst</p>

    <div
      class="button"
      @click="close()">Close</div>
  </section>
</template>

<script>
export default {
  props: {
    show: {
      type: String,
      default: ''
    }
  },
  methods: {
    togglePopModal() {
      console.log('CLICK')
    }
  }
}
</script>

<style lang="scss" scoped>
.pop-up {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: black;
  padding: 20px;
}

h1 {
  color: #fff;
}

p {
  color: #fff;
}

.button {
  text-align: center;
  background-color: #fff;
  color: #000;
  padding: 30px;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
}
</style>
