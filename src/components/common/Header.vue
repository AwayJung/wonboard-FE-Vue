<template>
  <div class="subheader">
    <!-- 상단 auth 메뉴 -->
    <div class="auth-section">
      <div class="auth-container">
        <ul class="auth-menu">
          <template v-if="!isLoggedIn">
            <li><a href="/login"><i class="fas fa-sign-in-alt"></i> Sign in</a></li>
            <li><a href="/signup"><i class="fas fa-user-plus"></i> Sign up</a></li>
          </template>
          <li v-else>
            <a href="/" @click.prevent="logout" class="logout-btn">
              <i class="fas fa-sign-out-alt"></i> Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
 
    <!-- 메인 네비게이션 -->
    <div class="main-header">
      <h1 class="name">
        <router-link to="/" class="name-link">
          <i class="fas fa-code"></i> 📚 RESUME
        </router-link>
      </h1>
      <nav class="main-nav">
        <router-link class="nav-link" to="/aboutme">
          <i class="fas fa-user"></i>
          <span>자기소개서</span>
        </router-link>
        <!-- <router-link class="nav-link" to="/skills">
          <i class="fas fa-laptop-code"></i>
          <span>기술</span>
        </router-link> -->
        <a class="nav-link" href="https://www.notion.so/STUDY-ca55382a6344434ab3a3c5b32414a0e5" target="_blank">
          <i class="fas fa-book"></i>
          <span>Notion</span>
        </a>
        <router-link class="nav-link" to="/contact">
          <i class="fas fa-envelope"></i>
          <span>Contact</span>
        </router-link>
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
  background-color: #1b1f23;  
  position: fixed;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #3c434c;
}
 .auth-section {
  background-color: #1b1f23;
  padding: 0.5rem 0; 
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
  font-size: 1.2rem;  
  font-weight: 500;
  padding: 0.7rem 1rem;  
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
  font-size: 1.2rem;  
  font-weight: 600;
  padding: 0.7rem 1rem;  
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