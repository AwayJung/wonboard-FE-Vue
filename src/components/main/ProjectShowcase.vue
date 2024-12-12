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
  background: #24292e;  
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #30363d;  
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3),
              0 2px 4px -1px rgba(0, 0, 0, 0.26),
              0 8px 16px rgba(0, 0, 0, 0.3); 
  position: relative;
  z-index: 2;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.4),
              0 4px 6px -1px rgba(0, 0, 0, 0.3),
              0 10px 20px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}
 .project-title {
   font-size: 1.25rem;
   font-weight: 600;
   margin-bottom: 0.5rem;
   color: #e6e6e6;  
 }
 
 .project-description {
   color: #8b949e; 
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
   color: #e6e6e6;  
   border: 1px solid #3c434c;  
 }
 
 h2 {
   color: #e6e6e6;  
 }
 </style>