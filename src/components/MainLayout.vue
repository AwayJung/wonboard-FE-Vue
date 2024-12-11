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
import Profile from './Profile.vue'
import TechStack from './TechStack.vue'
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
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1; 
}

.profile-area {
  position: sticky;
  top: 100px; 
  align-self: start;
  height: fit-content;
}

.content-area {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4.5rem;
}

.content-section {
  width: 100%;
  padding: 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
}

@media (max-width: 768px) {
  .main-layout {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin-top: 60px; 
  }

  .profile-area {
    position: static;
  }
}
</style>