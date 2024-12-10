<template>
    <div class="tech-stack">
      <section class="tech-section">
        <h2 class="stack-title">✨ Backend Stack ✨</h2>
        <div class="stack-items">
          <div class="tech-badge java">JAVA</div>
          <div class="tech-badge spring">SPRING BOOT</div>
          <div class="tech-badge mysql">MYSQL</div>
          <div class="tech-badge mariadb">MARIADB</div>
        </div>
   
        <h2 class="stack-title">✨ Frontend Stack ✨</h2>
        <div class="stack-items">
          <div class="tech-badge javascript">JAVASCRIPT</div>
          <div class="tech-badge vue">VUE.JS</div>
          <div class="tech-badge react">REACT</div>
          <div class="tech-badge html">HTML5</div>
          <div class="tech-badge css">CSS3</div>
        </div>
   
        <h2 class="stack-title">🛠 Development Tools 🛠</h2>
        <div class="stack-items">
          <div class="tech-badge intellij">INTELLIJ IDEA</div>
          <div class="tech-badge vscode">VSCODE</div>
          <div class="tech-badge git">GIT</div>
          <div class="tech-badge github">GITHUB</div>
          <div class="tech-badge notion">NOTION</div>
        </div>
   
        <h2 class="stack-title">👥 Contact 👥</h2>
        <div class="stack-items">
          <a href="mailto:wonjung67@gmail.com" class="tech-badge gmail">GMAIL</a>
          <a href="https://notion.so/your-page" target="_blank" class="tech-badge notion">NOTION</a>
        </div>
      </section>
    </div>
   </template>
   
   <script>
   export default {
    name: 'TechStack'
   }
   </script>
   
   <style scoped>
   .tech-stack {
    padding: 2rem;
    width: 100%;
   }
   
   .stack-title {
    text-align: center;
    margin: 2.5rem 0 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
   }
   
   .stack-items {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2.5rem;
   }
   
   .tech-badge {
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.2s ease;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
   }
   
   .tech-badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
   }
   
   /* Backend badges */
   .java { background-color: #007396; color: white; }
   .spring { background-color: #6DB33F; color: white; }
   .mysql { background-color: #4479A1; color: white; }
   .mariadb { background-color: #003545; color: white; }
   
   /* Frontend badges */
   .javascript { background-color: #F7DF1E; color: black; }
   .vue { background-color: #4FC08D; color: white; }
   .react { background-color: #61DAFB; color: black; }
   .html { background-color: #E34F26; color: white; }
   .css { background-color: #1572B6; color: white; }
   
   /* Tools badges */
   .intellij { background-color: #000000; color: white; }
   .vscode { background-color: #007ACC; color: white; }
   .git { background-color: #F05032; color: white; }
   .github { background-color: #181717; color: white; }
   .notion { background-color: #000000; color: white; }
   
   /* Contact badges */
   .gmail { 
    background-color: #EA4335; 
    color: white;
    text-decoration: none;
   }
   
   .notion {
    background-color: #000000;
    color: white;
    text-decoration: none;
   }
   
   @media (max-width: 768px) {
    .tech-stack {
      padding: 1rem;
    }
    
    .tech-badge {
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
    }
    
    .stack-title {
      font-size: 1.3rem;
      margin: 2rem 0 1rem;
    }
   
    .stack-items {
      gap: 0.8rem;
      margin-bottom: 2rem;
    }
   }
   </style>