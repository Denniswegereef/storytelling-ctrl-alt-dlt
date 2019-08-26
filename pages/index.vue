<template>
  <section class="container">
    <div class="logo-container">
      <img
        src="../assets/images/logo.gif"
        alt="logo">
    </div>
    <!-- <h1>Mag ik ook nee zeggen?</h1> -->
    <div class="bodyContainer">

      <p>Kies een passend scenario</p>

      <bigButton
        :text="'Auto scenario'"
        :to="'/question/1'"
        @click.native="carScenario"/>

      <div class="divider"/>

      <bigButton
        :text="'Marechaussee scenario'"
        :to="'/question/1'"
        @click.native="marechausseeScenario"/>
    </div>
  </section>
</template>

<script>
import bigButton from '~/components/small/bigButton.vue'
import jsonAirport from 'static/questions-airport.json'
import jsonCar from 'static/questions-car.json'

export default {
  components: {
    bigButton
  },
  data() {
    return {
      jsonAirport,
      jsonCar
    }
  },
  methods: {
    carScenario() {
      this.$store.commit('addJson', this.jsonCar)
    },
    marechausseeScenario() {
      this.$store.commit('addJson', this.jsonAirport)
    }
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

.divider {
  height: 1.5rem;
  width: 100%;
}
</style>
