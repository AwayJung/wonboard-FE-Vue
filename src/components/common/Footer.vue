<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-links">
        <a href="https://github.com/AwayJung" target="_blank" class="footer-link">© 2024 정원정</a>
        <span class="separator">·</span>
        <a href="mailto:wonjung67@gmail.com" class="footer-link">wonjung67@gmail.com</a>
      </div>
    </div>
  </footer>
 </template>
 
 <script>
 export default {
  name: "TheFooter",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
 };
 </script>
 
 <style scoped>
 .site-footer {
  padding: 2rem 0;
  margin-top: auto;
  border-top: 1px solid #d0d7de;
  font-size: 12px;
  background-color: #ffffff;
 }
 
 .footer-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
 }
 
 .footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #656d76;
 }
 
 .footer-link {
  color: #656d76;
  text-decoration: none;
  transition: color 0.2s ease;
 }
 
 .footer-link:hover {
  color: #0969da;
  text-decoration: underline;
 }
 
 .separator {
  color: #656d76;
 }
 
 @media (max-width: 768px) {
  .footer-content {
    padding: 0 1rem;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .separator {
    display: none;
  }
 }
 </style>