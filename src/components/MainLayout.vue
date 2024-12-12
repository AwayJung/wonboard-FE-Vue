<template>
  <div class="main-layout">
    <Profile class="profile-area" />
    <div class="content-area">
      <TechStack class="content-section" />
      <ProjectShowcase class="content-section" />
      <TechInterests class="content-section" />
    </div>
  </div>
</template>

<script>
import Profile from './main/Profile.vue'
import TechStack from './main/TechStack.vue'
import ProjectShowcase from './main/ProjectShowcase.vue'
import TechInterests from './main/TechInterests.vue'

export default {
  name: 'MainLayout',
  components: {
    Profile,
    TechStack,
    ProjectShowcase,
    TechInterests
  }
}
</script>

<style scoped>
.main-layout {
  display: grid;
  grid-template-columns: 296px 1fr;
  gap: 1.5rem;
  padding: 1.5rem 1.5rem 1.5rem 0; /* 왼쪽 패딩만 0으로 */

  max-width: 1280px;
  margin: 0 auto;
  flex: 1;
}

.profile-area {
  position: sticky;
  top: 130px;
  align-self: start;
  height: fit-content;
  padding-left: 1rem; /* 프로필 영역에 약간의 패딩 추가 */
}

.content-area {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 6.5rem;
}

.content-section {
  width: 100%;
  padding: 1.25rem;
  border: 1px solid #3c434c;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .main-layout {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin-top: 50px;
  }

  .profile-area {
    position: static;
  }
}
</style>