<template>
  <section class="container">
    <h1>Mag ik ook nee zeggen?</h1>
    <div class="bodyContainer">
      <p>Welkom bij Mag Ik Ook Nee Zeggen. <br> Hier ga je door een verhaal, waar jij bepaalt wat er gebeurt. Je komt er achter hoe het is om als burger staande gehouden worden en snel te moeten reageren op verschillende situaties.</p>
      <bigButton
        :text="'start'"
        :to="'/question/1'"/>
    </div>
  </section>
</template>

<script>
// import bigHeader from '~/components/bigHeader.vue'
import bigButton from '~/components/small/bigButton.vue'
import json from 'static/questions.json'

export default {
  components: {
    bigButton
  },
  data() {
    return {
      json
    }
  },
  mounted() {
    this.$store.commit('addJson', this.json)
  }
}
</script>


<style lang="scss" scoped>
h1 {
  background-color: var(--default-color);
  color: var(--black-color);
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 2rem;
}
p {
  // padding: var(--default-padding);
  margin-top: 2rem;
  margin-bottom: 8rem;
}
.bodyContainer {
  padding: 0 var(--default-padding);
}
</style>
