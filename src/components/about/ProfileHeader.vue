<template>
  <section class="header-section">
    <div class="profile-header">
      <div class="header-content">
        <!-- 왼쪽: 프로필 이미지 -->
        <div class="profile-image-wrapper">
    <img 
       :src="localProfileImage"
       alt="Profile"
       class="profile-image"
    />
  </div>
        <!-- 오른쪽: 텍스트 정보 -->
        <div class="profile-info">
          <h1 class="title">{{ profileData.title }}</h1>
          
          <div class="info-grid">
            <div class="contact-info">
              <div class="info-item">
                <i class="fas fa-envelope"></i>
                {{ profileData.name }}
              </div>
              <div class="info-item">
                <i class="fas fa-envelope"></i>
                {{ profileData.email }}
              </div>
              <div class="info-item">
                <i class="fas fa-phone"></i>
                {{ profileData.phone }}
              </div>
              <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                {{ profileData.address }}
              </div>
            </div>
            
            <div class="personal-info">
              <div class="info-item">
                <i class="fas fa-calendar"></i>
                {{ profileData.birthDate }}
              </div>
              <div class="info-item">
                <i class="fas fa-university"></i>
                {{ profileData.university }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Info Cards -->
    <div class="info-cards">
      <div class="quick-card" v-for="(card, index) in quickInfo" :key="index">
        <h3 class="card-header">{{ card.title }}</h3>
        <p class="card-body">{{ card.content }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import profileImage from '@/assets/images/profile3.jpg'

export default {
  name: 'ProfileHeader',
  data(){
    return {
      localProfileImage : profileImage
    }
  },
  props: {
    profileData: {
      type: Object,
      required: true,
      validator(value) {
        return [
          'name',
          'email',
          'phone',
          'address',
          'birthDate',
          'university'
        ].every(key => key in value)
      }
    },
    quickInfo: {
      type: Array,
      required: true,
      validator(value) {
        return value.every(card => 'title' in card && 'content' in card)
      }
    }
  }
}
</script>

<style scoped>
.header-section {
  margin-bottom: 2rem;
}
.profile-header {
  background: white;
  border-radius: 6px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem; 
}
.header-content {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.profile-image-wrapper {
  flex-shrink: 0;
  width: 220px;
  height: 220px;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.profile-info {
  flex-grow: 1;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #4a5568;
  font-size: 0.95rem;
}

.info-item i {
  color: #3182ce;
  font-size: 1rem;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;  /* 카드 간 간격 증가 */
}

.quick-card {
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s;
}

.quick-card:hover {
  transform: translateY(-4px);
}

.card-header {
  color: #2d3748;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.card-body {
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .info-item {
    justify-content: center;
  }

  .info-cards {
    grid-template-columns: 1fr;
  }

  .profile-image-wrapper {
    width: 180px;
    height: 180px;
  }
}
</style>