<template>
  <!-- <a class="button">{{ text }}</a> -->
  <div class="container">
    <a href="google.com">
      <button type="button">{{ text }}</button>
    </a>
  </div>
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
  font-size: 20px;
  font-weight: bold;
  border-style: none;
  border-radius: 7px;
  width: 100%;
  color: var(--black-color);
  background-color: var(--default-color);
  padding: 20px 30px;
  margin-top: 12rem;
  cursor: pointer;
  &:hover {
    background-color: darkBlue;
  }
}
.container {
  padding: var(--default-padding);
}
</style>
