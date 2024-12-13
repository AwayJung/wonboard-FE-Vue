<template>
  <section class="section-container personality-section">
    <h2 class="section-title">
      <i class="fas fa-user title-icon"></i>
      {{ sectionData.title }}
    </h2>
    <div class="section-content">
      <div class="personality-grid">
        <div class="personality-box">
          <h3 class="subsection-title">
            <i class="fas fa-plus-circle strength-icon"></i>
            장점
          </h3>
          <p>{{ sectionData.strengths }}</p>
        </div>
        <div class="personality-box">
          <h3 class="subsection-title">
            <i class="fas fa-minus-circle weakness-icon"></i>
            단점
          </h3>
          <p>{{ sectionData.weaknesses }}</p>
        </div>
      </div>
    </div>
  </section>
 </template>
 
 <script>
 export default {
  name: 'PersonalitySection',
  props: {
    sectionData: {
      type: Object,
      required: true,
      validator(value) {
        return ['title', 'strengths', 'weaknesses'].every(key => key in value)
      }
    }
  }
 }
 </script>
 
 <style scoped>
 .section-container {
  background: hwb(0 83% 16%);;

  border-radius: 6px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
 }
 
 .section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
  display: flex;
  align-items: center;
 }
 
 .title-icon {
  color: #3182ce;
  margin-right: 0.5rem;
 }
 
 .section-content {
  padding: 0.5rem;
 }
 
 .personality-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
 }
 
 .personality-box {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 6px;
  height: 100%;
 }
 
 .subsection-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
 }
 
 .strength-icon {
  color: #38a169;
  margin-right: 0.5rem;
 }
 
 .weakness-icon {
  color: #e53e3e;
  margin-right: 0.5rem;
 }
 
 .personality-box p {
  margin: 0;
  line-height: 2.2;
  font-size: 1rem;
  color: #4a5568;
 }
 
 @media (max-width: 768px) {
  .section-container {
    padding: 1.5rem;
  }
 
  .personality-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
 }
 </style>