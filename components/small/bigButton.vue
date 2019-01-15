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
      default: '/'
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
  padding: 20px 30px;
  margin-top: 2rem;
  &:hover {
    background-color: darkBlue;
  }
}

.default {
  background-color: black;
  background-color: var(--default-color);
}

.answer-button {
  background-color: var(--second-color);
  font-size: 17px;
  font-weight: normal;
  color: var(--white-color);
}
</style>
