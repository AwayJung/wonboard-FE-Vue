<template>
  <section class="section-container motivation-section">
    <h2 class="section-title">
      <i class="fas fa-flag title-icon"></i>
      {{ sectionData.title }}
    </h2>
    <div class="section-content">
      <p>{{ sectionData.content }}</p>
    </div>
  </section>
 </template>
 
 <script>
 export default {
  name: 'MotivationSection',
  props: {
    sectionData: {
      type: Object,
      required: true,
      validator(value) {
        return ['title', 'content'].every(key => key in value)
      }
    }
  }
 }
 </script>
 
 <style scoped>
 .section-container {
  background: white;
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
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 6px;
 }
 
 .section-content p {
  margin: 0;
  line-height: 1.8;
  font-size: 1rem;
  color: #4a5568;
 }
 
 @media (max-width: 768px) {
  .section-container {
    padding: 1.5rem;
  }
 }
 </style>