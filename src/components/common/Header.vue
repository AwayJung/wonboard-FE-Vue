<template>
  <div class="subheader">
    <!-- 상단 auth 메뉴 -->
    <div class="auth-section">
      <div class="auth-container">
        <ul class="auth-menu">
          <template v-if="!isLoggedIn">
            <li><router-link to="/login">Sign in</router-link></li>
            <li><router-link to="/signup">Sign up</router-link></li>
          </template>
          <li v-else>
            <a href="/" @click.prevent="logout" class="logout-btn">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
 
    <!-- 메인 네비게이션 -->
    <div class="main-header">
      <h1 class="name">
        <router-link to="/" class="name-link">RESUME</router-link>
      </h1>
      <nav class="main-nav">
        <router-link class="nav-link" to="/aboutMe">AboutMe</router-link>
        <router-link class="nav-link" to="/skills">Skills</router-link>
        <a class="nav-link" href="https://www.notion.so/Study-Away-_-ca55382a6344434ab3a3c5b32414a0e5" target="_blank">Notion</a>

        <router-link class="nav-link" to="/contact">Contact</router-link>
      </nav>
    </div>
  </div>
 </template>
 
 <script>
 export default {
  name: "SubHeader",
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
 };
 </script>
 
 <style scoped>
 .subheader {
  width: 100%;
  background-color: #24292f;
  position: fixed;
  top: 0;
  z-index: 1000;
 }
 
 .auth-section {
  background-color: #1b1f23;
  padding: 0.3rem 0;
 }
 
 .auth-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
 }
 
 .auth-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
 }
 
 .auth-menu a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  opacity: 0.7;
 }
 
 .auth-menu a:hover {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.1);
 }
 
 .main-header {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
 }
 
 .name {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
 }
 
 .name-link {
  text-decoration: none;
  color: #ffffff;
  transition: all 0.2s ease;
  position: relative;
 }
 
 .name-link:hover {
  color: rgba(255, 255, 255, 0.7);
 }
 
 .main-nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
 }
 
 .nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem;
  transition: all 0.2s ease;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  opacity: 0.7;
 }
 
 .nav-link:hover {
  opacity: 1;
 }
 
 .router-link-active {
  opacity: 1;
 }
 
 /* 반응형 디자인 */
 @media (max-width: 768px) {
  .auth-container {
    padding: 0 1rem;
  }
 
  .auth-menu {
    justify-content: center;
  }
  
  .main-header {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
 
  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
 
  .nav-link {
    font-size: 0.8rem;
  }
 }
 </style>