<template>
  <nuxt-link :to="to">
    <button
      :class="buttonType"
      type="button">
      {{ text }}
    </button>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'button'
    },
    to: {
      type: String,
      default: ''
    },
    buttonType: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  border-style: none;
  border-radius: 7px;
  width: 100%;
  color: var(--black-color);
  padding: 18px 10px;
  min-height: 70px;
  transition: all 0.2s;
  // &:hover {
  //   transform: scale(1.1);
  //   background-color: var(--default-color-dark);
  // }
  &:active {
    transform: scale(1.1);
    background-color: var(--default-color-dark);
  }
}

.default {
  background-color: black;
  background-color: var(--default-color);
  margin-top: 20px;
}

.answer-button {
  background-color: var(--second-color);
  font-size: 17px;
  font-weight: normal;
  color: var(--white-color);
  margin-top: var(--default-margin);
  &:active {
    background-color: var(--second-color-dark);
  }
  // &:hover {
  //   background-color: var(--second-color-dark);
  // }
}
</style>
