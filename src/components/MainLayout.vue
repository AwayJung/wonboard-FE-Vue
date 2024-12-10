<template>
  <div class="main-layout">
    <Profile class="profile-area" />
    <TechStack class="content-area" />
  </div>
</template>

<script>
import Profile from './Profile.vue'
import TechStack from './TechStack.vue'

export default {
  name: 'MainLayout',
  components: {
    Profile,
    TechStack
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
  width: 100%;
  padding-bottom: 2rem;
  border: 2px solid #e5e7eb;
  border-radius: 16px; 
  padding: 1.5rem;
  margin-top: 4.5rem;
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