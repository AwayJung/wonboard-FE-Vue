<template>
    <div class="profile-section">
      <div class="profile-image">
        <img src="@/assets/images/profile.jpg" alt="Profile" class="profile-img" />
      </div>
      <h1 class="name">정원정</h1>
      <div class="username">@AwayJung</div>
      <button class="edit-btn">Edit profile</button>
      <div class="contact-info">
        <div class="info-item">
          <i class="far fa-envelope"></i>
          <a href="mailto:wonjung67@gmail.com" class="email-link">
            wonjung67@gmail.com
          </a>
        </div>
        <div class="info-item">
          <i class="far fa-calendar"></i>
          <span>Joined 2024</span>
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
    padding: 2rem;
  }
  
  .profile-image {
    width: 100%;
    max-width: 296px;
    margin-bottom: 1rem;
  }
  
  .profile-img {
    width: 100%;
    border-radius: 50%;
    border: 1px solid #e1e4e8;
  }
  
  .name {
    font-size: 24px;
    font-weight: 600;
    margin: 0.5rem 0;
    color: #24292e;
  }
  
  .username {
    font-size: 20px;
    color: #586069;
    margin-bottom: 1rem;
  }
  
  .edit-btn {
    width: 100%;
    padding: 5px 16px;
    font-size: 14px;
    background-color: #fafbfc;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 1rem;
  }
  
  .edit-btn:hover {
    background-color: #f3f4f6;
  }
  
  .contact-info {
    margin-top: 1rem;
    border-top: 1px solid #e1e4e8;
    padding-top: 1rem;
  }
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0.5rem;
    color: #24292e;
  }
  
  .info-item i {
    color: #6a737d;
    width: 16px;
  }
  
  .email-link {
    color: #0366d6;
    text-decoration: none;
  }
  
  .email-link:hover {
    text-decoration: underline;
  }
  </style>