<template>
  <div id="app">
    <FractionSummator />
  </div>
</template>

<script>
import FractionSummator from './components/FractionSummator.vue';

export default {
  name: 'App',

  components: {
    FractionSummator,
  },
};
</script>

<style lang="scss">
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-family: Arial, sans-serif;
}

.d-flex-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.fs-xl {
  font-size: 14pt;
}

.pt20 {
  padding-top: 20px;
}
</style>
