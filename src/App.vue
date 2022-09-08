<template>
  <div>

    <div id="app">
      <!-- <HomePage /> -->
      <!-- <PaginationSample /> -->
      <router-view />
  
    </div>
  </div>
</template>

<script>
// import PaginationSample from './components/pagination.vue';
// import HomePage from './components/Home.vue'

export default {
  components: {
    // PaginationSample
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
