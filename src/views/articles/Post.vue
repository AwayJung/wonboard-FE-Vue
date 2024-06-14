<template>
  <div class="form-container">
    <div class="form-group">
      <input
        type="text"
        v-model="title"
        placeholder="제목을 입력하세요"
        class="input-field"
      />
    </div>
    <div class="form-group author-info">
      <span>작성자: {{ reg_user_id }}</span>
    </div>
    <div class="form-group">
      <textarea
        v-model="content"
        placeholder="내용을 입력하세요"
        class="textarea-field"
      ></textarea>
    </div>
    <div class="form-group">
      <input type="file" @change="onFileChange" class="file-input" />
    </div>
    <div class="form-group submit-button-group">
      <router-link to="/articles/list" class="submit-button"
        >목록으로</router-link
      >
      <button type="submit" @click="post" class="submit-button list-button">
        글 작성
      </button>
    </div>
  </div>
</template>
<script>
import { axiosWithAuth } from "@/utils/axios";
export default {
  name: "PostView",
  data() {
    return {
      title: "",
      content: "",
      reg_user_id: "",
      file: null,
    };
  },
  async created() {
    await this.$store.dispatch("refresh");
    console.log("리프레쉬토큰 불러옴");
    this.reg_user_id = this.$store.state.loginEmail;
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
    },
    async post() {
      await this.$store.dispatch("refresh");
      console.log("리프레쉬토큰 불러옴2");
      if (!this.title || !this.content || !this.reg_user_id || !this.file) {
        alert("모든 항목을 입력하세요");
        return;
      }
      const article = {
        title: this.title,
        content: this.content,
        reg_user_id: this.reg_user_id,
      };

      const formData = new FormData();
      formData.append("file", this.file);
      formData.append(
        "article",
        new Blob([JSON.stringify(article)], { type: "application/json" })
      );

      try {
        const response = await axiosWithAuth.post(
          "http://localhost:8080/article/post",
          formData,
          {
            headers: {
              // Authorization: `Bearer ${this.$store.state.accessToken}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.data.result === "success") {
          alert("게시글이 작성되었습니다");
          this.$router.push("/articles/list");
        } else {
          alert("게시글 작성에 실패했습니다");
        }
      } catch (e) {
        console.error(e);
        if (e.response) {
          console.error("토큰", this.$store.state.accessToken);
          console.error("response data", e.response);
        }
        alert("게시글 작성 중 오류가 발생했습니다");
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}
.author-info {
  display: flex;
  align-items: left;
}
.author-info span {
  margin-right: 10px;
}
.submit-button-group {
  display: flex;
  justify-content: flex-end;
}

.input-field,
.textarea-field,
.file-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}
.submit-button,
.list-button {
  padding: 10px 20px;
  background-color: #d3d3d3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px; /* Add some space between the buttons */
  text-decoration: none; /* Remove the underline */
  font-size: 1em; /* Make the font size the same */
}

.textarea-field {
  resize: vertical;
  min-height: 300px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #d3d3d3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
