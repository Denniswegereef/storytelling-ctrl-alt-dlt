<template>
  <div class="screen">
    <nuxt/>
    <!-- <questionBullets/> -->
  </div>
</template>

<script>
// import questionBullets from '~/components/questionBullets.vue'
export default {
  // components: {
  //   questionBullets
  // }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  /* background-color: darkGrey; */
  background-color: var(--black-color);
  color: var(--white-color);
}

.screen {
  height: 93vh;
  margin: 0 auto;
  /* margin-top: 50px; */
}

.bodyContainer .default {
  margin-top: -10px;
}

.selected {
  background-color: !important;
  animation-name: click;
  animation-duration: 1.6s;
  transition-timing-function: ease-in;
}

@-webkit-keyframes click {
  from {
    background-color: #48bb78;
  }
  to {
    background-color: var(--second-color);
  }
}
</style>
