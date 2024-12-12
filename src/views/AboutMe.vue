<template>
    <div class="about-me-container">
      <div class="profile-header-wrapper">
        <profile-header 
          :profile-data="profileData"
          :quick-info="quickInfoCards"
        />
      </div>
      <div class="sections-container">
        <growth-section :section-data="sections.growth" />
        <personality-section :section-data="sections.personality" />
        <work-power :section-data="sections.workPower" />
        <motivation-section :section-data="sections.motivation" />
      </div>
    </div>
  </template>
  
  <script>
  import { profileData, quickInfoCards, sections } from '@/data/dummyData'
  import ProfileHeader from '@/components/about/ProfileHeader.vue'
  import GrowthSection from '@/components/about/sections/GrowthSection.vue'
  import PersonalitySection from '@/components/about/sections/PersonalitySection.vue'
  import WorkPower from '@/components/about/sections/JobCompetencySection.vue'
  import MotivationSection from '@/components/about/sections/MotivationSection.vue'
  
  export default {
    name: 'AboutMe',
    components: {
      ProfileHeader,
      GrowthSection,
      PersonalitySection,
      WorkPower,
      MotivationSection
    },
    data() {
      return {
        profileData,
        quickInfoCards,
        sections
      }
    }
  }
  </script>
  
  <style scoped>
  .about-me-container {
    min-height: calc(100vh - 60px);
    margin-top: 100px;
    position: relative;
  }
  
  .profile-header-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .sections-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    .profile-header-wrapper,
    .sections-container {
      padding: 1rem;
    }
  }
  </style>