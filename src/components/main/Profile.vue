<template>
  <div class="profile-section">
    <div class="profile-image">
      <img src="@/assets/images/profile.jpg" alt="Profile" class="profile-img" />
    </div>
    
    <div class="profile-info">
      <h1 class="name">정원정</h1>
      <div class="username">@AwayJung</div>
      <!-- <button class="edit-btn">Edit profile</button> -->

      <!-- About Me 섹션 -->
      <div class="bio-section">
        <h2 class="bio-title">About Me</h2>
        <p class="bio-text">
          안녕하세요! 백엔드와 프론트엔드 개발에 관심이 많은 주니어 개발자입니다.<br/>
          새로운 기술을 배우고 도전하는 것을 좋아하며, 
          새로운 기술을 배우기 위해서 끊임없이 노력하고 있습니다. <br/>
          현재는 Vue.js, React와 Spring Boot를 주로 사용하여 개발하고 있습니다.
        </p>
      </div>

      <!-- Contact 정보 -->
      <div class="contact-section">
        <h2 class="bio-title">Contact Me! </h2>
        <a href="mailto:wonjung67@gmail.com" class="email-link">
         wonjung67@gmail.com
        </a>
        <div class="joined-date">1999.01.21</div>
        <div class="joined-date">Tel) 010-3164-3046</div>
        <div class="joined-date">Gyunggi-do, Gwacheon-si</div>
      </div>
    </div>
  </div>
</template>

  <script>
  export default {
    name: 'UserProfile'
  }
  </script>
  
  <style scoped>
.profile-section {
  padding: 1rem;
  max-width: 296px;
}

.profile-image {
  margin-bottom: 1rem;
}

.profile-img {
  width: 105%;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #8b949e; 
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.name {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.username {
  font-size: 1.25rem;
  color: #666;
  margin-top: -0.5rem;
}

/* .edit-btn {
  width: 100%;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.edit-btn:hover {
  background-color: #f3f4f6;
} */

.bio-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 2px solid #3c434c;     
  border-radius: 0.5rem;        
  padding: 1rem;                 
  margin: 0.5rem 0;             
  background-color: #24292e;     
  
}


.bio-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
}

.bio-text {
  font-size: 0.875rem;
  color: #e6e6e6;
  line-height: 1.5;
  margin: 0;
}

.contact-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  border-top: 1px solid #3c434c;  
  padding-top: 1rem;              
  margin-top: 0.5rem;             
}

.email-link {
  color: #2563eb;
  text-decoration: none;
}

.email-link:hover {
  text-decoration: underline;
}

.joined-date {
  color: #8b949e;
}
</style>