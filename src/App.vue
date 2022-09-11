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
::-webkit-scrollbar{
    width:20px;
    height: 20px;
}
::-webkit-scrollbar-thumb{
    background: linear-gradient(
        to bottom,
        #FF850A,
        #FF3474
    );
    border-radius: 50px;
}
::-webkit-scrollbar-track{
    background: #474747;
}
</style>
