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
        <JobCompetencySection :section-data="sections.workPower" />
        <motivation-section :section-data="sections.motivation" />
      </div>
    </div>
  </template>
  
  <script>
  import { profileData, quickInfoCards, sections } from '@/data/dummyData'
  import ProfileHeader from '@/components/about/ProfileHeader.vue'
  import GrowthSection from '@/components/about/sections/GrowthSection.vue'
  import PersonalitySection from '@/components/about/sections/PersonalitySection.vue'
  import JobCompetencySection from '@/components/about/sections/JobCompetencySection.vue'
  import MotivationSection from '@/components/about/sections/MotivationSection.vue'
  
  export default {
    name: 'AboutMe',
    components: {
      ProfileHeader,
      GrowthSection,
      PersonalitySection,
      JobCompetencySection,
      MotivationSection
    },
    data() {
      return {
        profileData, // 프로필 정보 
        quickInfoCards,  // 카드들(학력,경력,연봉..) 
        sections   // 각 섹션별 데이터
      }
    }
  }
  </script>
  
  <style scoped>
  .about-me-container {
    min-height: calc(100vh - 60px);
    margin-top: 130px;
    position: relative;
    padding: 0 1rem;
  }
  
  .profile-header-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 1rem; 
  }
  
  .sections-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem; 
    border-radius: 6px;
  }
  
  @media (max-width: 768px) {
    .about-me-container {
      margin-top: 100px;
      padding: 0 0.5rem;
    }
  }
  </style>