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

                {{ profileData.name }}
              </div>
              <div class="info-item">

                {{ profileData.email }}
              </div>
              <div class="info-item">

                {{ profileData.phone }}
              </div>
              <div class="info-item">

                {{ profileData.address }}
              </div>
            </div>
            
            <div class="personal-info">
              <div class="info-item">

                {{ profileData.birthDate }}
              </div>
              <div class="info-item">

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
.profile-header {
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  gap: 4rem;
  align-items: flex-start;
}

.profile-image-wrapper {
  flex-shrink: 0;
  width: 180px;
  height: 180px;
  border: 4px solid #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
}

.profile-info {
  flex-grow: 1;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  color: #4a5568;
  font-size: 1rem;
  border-bottom: 1px solid #edf2f7;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.quick-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.75rem;
  transition: all 0.2s ease;
}

.quick-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.card-header {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.card-body {
  font-size: 1.1rem;
  color: #1a202c;
  font-weight: 500;
}

@media (max-width: 768px) {
  .profile-header {
    padding: 1.5rem;
  }

  .header-content {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .profile-image-wrapper {
    width: 140px;
    height: 140px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .info-cards {
    grid-template-columns: 1fr;
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
  }
}
</style>