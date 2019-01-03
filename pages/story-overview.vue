<template>
  <section class="container">
    <h1>You ended the game this is the overview</h1>
    <div
      v-for="(questionAnswer, index) in $store.state.questionsAnswered"
      :key="index"
      class="bullet">
      <section>
        <h4>{{ questionAnswer.q }}</h4>
        <h5>{{ questionAnswer.a }}</h5>
      </section>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 20px;
}
</style>
