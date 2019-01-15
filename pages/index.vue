<template>
  <section class="container">
    <h1>Mag ik ook nee zeggen?</h1>
    <p>Welkom bij Mag Ik Ook Nee Zeggen. <br> Hier ga je door een verhaal, waar jij bepaalt wat er gebeurt. Je komt er achter hoe het is om als burger staande gehouden worden en snel te moeten reageren op verschillende situaties.</p>
    <nuxt-link to="/explanation">
      <bigButton :text="'start'"/>
    </nuxt-link>
  </section>
</template>

<script>
// import bigHeader from '~/components/bigHeader.vue'
import bigButton from '~/components/small/bigButton.vue'

export default {
  components: {
    bigButton
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
  padding: var(--default-padding);
  margin-top: 2rem;
}
</style>
