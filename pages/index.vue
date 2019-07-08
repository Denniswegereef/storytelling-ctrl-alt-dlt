<template>
  <section class="container">
    <div class="logo-container">
      <img
        src="../assets/images/logo.gif"
        alt="logo">
    </div>
    <!-- <h1>Mag ik ook nee zeggen?</h1> -->
    <div class="bodyContainer">
      <p>Ben jij je bewust van je rechten bij een staande houding als automobilist? Hoe brengt jij het er vanaf?</p>
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
  margin-bottom: 4rem;
  font-size: 20px;
}
.bodyContainer {
  padding: 0 var(--default-padding);
}
.container {
  height: 93vh;
}
.logo-container {
  width: 100%;
  padding: 3rem;
  img {
    width: 100%;
  }
  background-image: url('../assets/images/verkeer.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 600px) {
    padding: 6rem;
  }
}
</style>
