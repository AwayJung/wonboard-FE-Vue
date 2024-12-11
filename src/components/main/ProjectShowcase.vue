<template>
    <div>
      <h2 class="text-2xl font-bold">Featured Work</h2>
      <div class="project-list">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="tag-container">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectShowcase',
    data() {
      return {
        projects: [
          {
            title: "ASAP Launcher",
            description: "인스턴스 설정 자동화 도구",
            tags: ["Next.js", "TypeScript"]
          },
          {
            title: "Portfolio Website",
            description: "개인 포트폴리오 웹사이트",
            tags: ["React", "Tailwind"]
          },
          {
            title: "Coming Soon",
            description: "새로운 프로젝트 준비 중...",
            tags: ["Coming", "Soon"]
          }
        ]
      }
    }
  }
  </script>
 <style scoped>
 .project-list {
   display: flex;
   flex-direction: column;
   gap: 1rem;
   margin-top: 1rem;
   position: relative;
   z-index: 1;
 }
 
 .project-card {
   background: #24292e;  /* 배경색을 메인 배경색과 동일하게 변경 */
   border-radius: 0.75rem;
   padding: 1.5rem;
   border: 1px solid #30363d;  /* 테두리 색상 변경 */
   box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;  /* 그림자 약간 진하게 */
   position: relative;
   z-index: 2;
 }
 
 .project-title {
   font-size: 1.25rem;
   font-weight: 600;
   margin-bottom: 0.5rem;
   color: #e6e6e6;  
 }
 
 .project-description {
   color: #8b949e;  /* 설명 텍스트 색상 변경 */
   margin-bottom: 1rem;
 }
 
 .tag-container {
   display: flex;
   gap: 0.5rem;
   flex-wrap: wrap;
 }
 
 .tag {
   background:#3c434c;  
   padding: 0.25rem 0.75rem;
   border-radius: 0.375rem;
   font-size: 0.875rem;
   color: #e6e6e6;  /* 태그 텍스트 색상 변경 */
   border: 1px solid #3c434c;  /* 태그 테두리 색상 변경 */
 }
 
 h2 {
   color: #e6e6e6;  /* Featured Work 제목 색상 변경 */
 }
 </style>