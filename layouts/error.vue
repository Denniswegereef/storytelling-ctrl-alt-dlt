<template>
  <section>
    <!-- <popModal
      :show="showPopModal"
      @click="togglePopModal()"/>

    <h1>not found</h1> -->
    <!-- <img
      src="../assets/images/404.gif"
      alt="gif 404"> -->
    <!-- <nuxt-link to="/">Go to home</nuxt-link> -->
    <!-- <bigButton
      :text="'Go to home'"
      :to="'/question/1'"/> -->
    <!-- <bigButton
      :text="'Go to home'"
      :to="'/'"
      @click.native="resetStore()"/> -->
  </section>
</template>

<script>
import bigButton from '~/components/small/bigButton.vue'
import popModal from '~/components/popModal.vue'

export default {
  components: {
    bigButton,
    popModal
  },
  data() {
    return {
      showPopModal: ''
    }
  },
  mounted() {
    this.$store.commit('nextQuestion', 1)
    this.$store.commit('resetStory')
    this.$router.push('/')
  }
}
</script>

<style lang="scss" scoped>
.clickSomething {
  height: 30px;
  width: 30px;
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: green;
  cursor: pointer;
  &:active {
    background-color: red;
  }
  &:hover {
    background-color: red;
  }
}
img {
  width: 100%;
}
section {
  padding: 0 var(--default-padding);
}
</style>
