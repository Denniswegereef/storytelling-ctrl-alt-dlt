<template lang="html">
  <button
    type="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'button'
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
  color: var(--black-color);
  min-height: 30px;
  width: 100px;
  background-color: var(--default-color);
  margin: 0 10px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
    background-color: var(--default-color-dark);
  }
}
</style>
