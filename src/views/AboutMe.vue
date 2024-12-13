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
<!-- AboutMe.vue -->
<style scoped>
.about-me-container {
  min-height: calc(100vh - 60px);
  margin-top: 100px;
  position: relative;
  padding: 0 2rem;
  background: #f0f2f5; /* 연한 회색 배경 */
}

.profile-header-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 2rem;
  padding-top: 2rem;
}

.sections-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 4rem;
}
</style>

<!-- ProfileHeader.vue -->
<style scoped>
.profile-header {
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.header-content {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.profile-image-wrapper {
  width: 200px;
  height: 200px;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.title {
  font-size: 2rem;
  color: #1a202c;
  margin-bottom: 1.5rem;
}

.info-item {
  color: #4a5568;
  font-size: 1.1rem;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.quick-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
}

.card-header {
  font-size: 1.1rem;
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.card-body {
  color: #4a5568;
}
</style>

<!-- 각 섹션 컴포넌트의 공통 스타일 -->
<style scoped>
.section-container {
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.section-title {
  font-size: 1.8rem;
  color: #2d3748;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.section-content {
  color: #4a5568;
  line-height: 1.8;
  font-size: 1.1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 8px;
}

</style>