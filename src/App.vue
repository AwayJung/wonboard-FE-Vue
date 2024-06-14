<template>
  <div id="app">
    <Header />
    <!-- <div class="links">
      <router-link class="link" to="articles/post">POST</router-link>
      <router-link class="link" to="articles/list">LIST</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import Header from "./components/common/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
