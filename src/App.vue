<template>
  <div id="app">
    <HomePage />
    <router-view />

  </div>
</template>

<script>
import HomePage from './components/Home.vue'

export default {
  components: {
    HomePage
  }
}
</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
