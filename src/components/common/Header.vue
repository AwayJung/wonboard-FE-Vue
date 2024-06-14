<template>
  <header>
    <div>
      <ul class="menu">
        <li><a href="/">HOME</a></li>
        <li><a href="/signup">회원가입</a></li>
        <li><a href="/login">로그인</a></li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: "TopHeader",
};
</script>
<style scoped>
header {
  width: 100%;
  text-align: center;
  position: relative;
  height: 70px;
  border-bottom: 1.5px solid #35495e;
  background-color: #35495e;
}
header h1 {
  position: absolute;
  top: 10;
  left: 100;
}
header ul.menu {
  position: absolute;
  right: 50px;
  display: flex;
  /justify-content: space-around;
  align-items: center;
}
header ul.menu li {
  padding: 15px 30px;
  list-style: none;
}
a {
  text-decoration: none;
  color: #ecf0f1;
}
</style>
