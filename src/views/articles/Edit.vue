<template>
  <div>
    <h2>게시글 수정</h2>
    <div class="form-container">
      <div class="form-group">
        <!-- <label for="title">Title</label> -->
      </div>
      <input
        class="input-field"
        type="text"
        id="title"
        name="title"
        v-model="article.title"
      />
      <div>
        <label for="content">-</label>
      </div>
      <textarea
        class="textarea-field"
        id="content"
        name="content"
        v-model="article.content"
      ></textarea>
    </div>
    <div></div>
    <div>
      <button
        class="submit-button list-button"
        type="submit"
        @click.prevent="updateArticle"
      >
        Update
      </button>
      <button class="submit-button list-button" type="button" @click="goBack">
        Back
      </button>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { axiosWithAuth } from "@/utils/axios";

export default {
  name: "ArticleEdit",
  data() {
    return {
      article: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    async fetchArticle() {
      try {
        await this.$store.dispatch("refresh");
        const accessToken = this.$store.state.accessToken;
        const axiosInstance = axiosWithAuth(accessToken);
        const response = await axiosInstance.get(
          `http://localhost:8080/article/${this.$route.params.id}`
          // {
          //   headers: {
          //     Authorization: `Bearer ${this.$store.state.accessToken}`,
          //   },
          // }
        );
        this.article.title = response.data.data.title;
        this.article.content = response.data.data.content;
      } catch (error) {
        console.error(error);
      }
    },
    async updateArticle() {
      const formData = new FormData();
      formData.append("title", this.article.title);
      formData.append(
        "article",
        new Blob(
          [
            JSON.stringify({
              title: this.article.title,
              content: this.article.content,
            }),
          ],
          {
            type: "application/json",
          }
        )
      );

      try {
        await this.$store.dispatch("refresh");
        const accessToken = this.$store.state.accessToken;
        const axiosInstance = axiosWithAuth(accessToken);
        const res = await axiosInstance.put(
          `http://localhost:8080/article/${this.$route.params.id}`,
          formData,
          {
            headers: {
              //  Authorization: `Bearer ${this.$store.state.accessToken}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (res.data.result === "success")
          this.$router.push({ name: "ArticleList" });
      } catch (error) {
        console.error("토큰", this.$store.state.accessToken);
        console.error(error);
      }
    },
    goBack() {
      this.$router.back();
    },
  },
  mounted() {
    this.fetchArticle();
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
  height: 420px;
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
  padding: 5px 10px;
  background-color: #d3d3d3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px; /* Add some space between the buttons */
  text-decoration: none; /* Remove the underline */
  font-size: 0.8em; /* Make the font size the same */
  margin-top: 10px;
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
