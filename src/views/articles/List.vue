<template>
  <div>
    <h1>게시글 목록</h1>
    <div class="link-container">
      <router-link POST to="/articles/post" class="link-style"
        >POST</router-link
      >
      <router-link to="/" class="link-style">HOME</router-link>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in articles" :key="index">
            <td>
              <router-link :to="`/articles/${article.id}`">{{
                article.title
              }}</router-link>
            </td>
            <td>{{ article.content }}</td>
            <td>{{ article.reg_user_id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination
      :pageNumber="pageNumber"
      :pageSize="pageSize"
      @change-page="changePage"
    />
  </div>
</template>
<script>
import { axiosWithAuth } from "@/utils/axios";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "ArticleList",
  components: {
    Pagination,
  },
  data() {
    return {
      articles: [],
      reg_user_id: "",
      pageNumber: 1,
      pageSize: 10,
    };
  },
  methods: {
    async fetchData() {
      try {
        await this.$store.dispatch("refresh");
        console.log("List에서 refresh()호출");
        const accessToken = this.$store.state.accessToken;
        const authInstance = axiosWithAuth(accessToken);
        const response = await authInstance.get(
          "http://localhost:8080/article/list",
          {
            // headers: {
            //   Authorization: "Bearer " + this.$store.state.accessToken,
            // },
            params: {
              page: this.pageNumber,
              size: this.pageSize,
            },
          }
        );
        this.articles = response.data.data;
      } catch (e) {
        console.error(e);
      }
    },
    changePage(pageNumber) {
      this.pageNumber = pageNumber;
      this.fetchData();
    },
  },
  async mounted() {
    this.fetchData();
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

table,
th,
td {
  border: 1px solid #ddd;
  padding: 12px 15px;
}

th {
  background-color: #f3f3f3;
  color: #333;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
th:nth-child(3),
td:nth-child(3) {
  width: 10%;
}

th:nth-child(2),
td:nth-child(2) {
  width: 60%;
}

.link-style {
  color: #4caf50;
  text-decoration: none;
  margin-right: 20px;
}

.link-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
