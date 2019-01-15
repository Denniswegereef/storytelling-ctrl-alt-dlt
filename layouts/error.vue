<template>
  <section>
    <popModal
      :show="showPopModal"
      @click="togglePopModal()"/>
      
    <div class="clickSomething">lol</div>
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
      showPopModal: ''
    }
  },
  methods: {
    togglePopModal() {}
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
