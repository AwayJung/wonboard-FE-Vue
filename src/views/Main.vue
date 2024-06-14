<template>
  <div>
    <div class="links">
      <router-link class="link" to="articles/post">POST</router-link>
      <router-link class="link" to="articles/list">LIST</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainView",
};
</script>
<style>
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
