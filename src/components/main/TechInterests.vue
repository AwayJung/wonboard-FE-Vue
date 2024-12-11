<template>
  <div class="tech-interests">
    <div class="interests-grid">
      <div class="interest-section">
        <h3 class="section-title">Current Focus</h3>
        <div class="focus-list">
          <div v-for="item in currentFocus" :key="item.tech" class="focus-item">
            <div class="focus-dot"></div>
            <div class="focus-content">
              <h4 class="focus-tech">{{ item.tech }}</h4>
              <p class="focus-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="interest-section">
        <h3 class="section-title">Next Goals</h3>
        <div class="goals-list">
          <div v-for="(goal, index) in nextGoals" :key="index" class="goal-item">
            <div class="goal-number">{{ index + 1 }}</div>
            <p class="goal-text">{{ goal }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TechInterests',
  data() {
    return {
      currentFocus: [
        {
          tech: "React",
          desc: "컴포넌트 설계 패턴과 재사용성 향상"
        },
        {
          tech: "Vue.js",
          desc: "Pinia를 활용한 상태관리 패턴 구현"
        },
        {
          tech: "Spring Boot",
          desc: "Spring Security와 인증/인가 구현"
        }
      ],
      nextGoals: [
        "클라우드 네이티브 애플리케이션 개발",
        "CS 개념 공부",
        "테크 블로그 시작하기"
      ]
    }
  }
}
</script>

<style scoped>
.tech-interests {
  padding: 1rem;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.interest-section {
  padding: 1.5rem;
  background-color: #24292e;
  border: 1px solid #3c434c;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 100%;
}

.section-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #e6e6e6;
}

.focus-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.focus-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.focus-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #3b82f6;
  border-radius: 9999px;
  margin-top: 0.5rem;
}

.focus-tech {
  font-weight: 500;
  color: #e6e6e6;
  margin-bottom: 0.25rem;
}

.focus-desc {
  font-size: 0.875rem;
  color: #8b949e;
}

.goals-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.goal-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.goal-number {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #22c55e;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: #22c55e;
}

.goal-text {
  color: #e6e6e6;
}

@media (max-width: 768px) {
  .interest-section {
    width: 100%;
  }
}
</style>