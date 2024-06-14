<template>
  <div id="app">
    <Header />
    <div class="links">
      <router-link class="link" to="articles/post">POST</router-link>
      <router-link class="link" to="articles/list">LIST</router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
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

.links {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.link {
  margin: 0 10px;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  font-size: 1.2em;
  background-color: #2c3e50;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.link:hover {
  background-color: #e74c3c;
}
</style>
