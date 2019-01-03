<template>
  <section class="bulletComponent">
    <h4>These are gonna be question bullets</h4>
    <section class="bulletHolder">
      <div
        v-for="(questionAnswer, index) in $store.state.questionsAnswered"
        :key="index"
        class="bullet">
        {{ index + 1 }}
      </div>
    </section>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state.questionsAnswered)
  }
}
</script>

<style lang="scss" scoped>
.bulletComponent {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.bulletHolder {
  display: flex;
  flex-direction: row;
}

.bullet {
  margin: 10px;
  height: 20px;
  width: 20px;
  background-color: red;
}
</style>
