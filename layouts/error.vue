<template>
  <section>
    <popModal :show="showPopModal"/>
    <div
      class="clickSomething"
      @click="togglePopModal()">lol</div>
    <h1>not found</h1>
    <nuxt-link to="/">go back</nuxt-link>
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
      showPopModal: false
    }
  },
  methods: {
    togglePopModal() {
      this.showPopModal = true
      console.log('toggle')
    }
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
  &:hover {
    background-color: red;
  }
}
</style>
