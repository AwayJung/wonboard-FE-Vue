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
            tags: ["???", "???"]
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
  position: relative;  /* 추가 */
  z-index: 1;  /* 추가 */
}

.project-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #d1d5db;  
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; 
  position: relative;  
  z-index: 2;  
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;  
}

.project-description {
  color: #6b7280;  
  margin-bottom: 1rem;
}

.tag-container {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #374151;
  border: 1px solid #e5e7eb;  
}
  </style>