<template>
  <a class="button">{{ text }}</a>
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
.button {
  color: #fff;
  background-color: blue;
  padding: 10px 15px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: darkBlue;
  }
}
</style>
