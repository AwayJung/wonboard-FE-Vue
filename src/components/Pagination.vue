<template>
  <div class="pagination">
    <button
      @click="changePage(pageNumber - 1)"
      :disabled="pageNumber === 1"
      class="page-button"
    >
      이전
    </button>

    <button
      v-for="page in pages"
      :key="page"
      @click="changePage(page)"
      :class="['page-number', { active: page === pageNumber }]"
    >
      {{ page }}
    </button>

    <button
      @click="changePage(pageNumber + 1)"
      :disabled="pageNumber === totalPages"
      class="page-button"
    >
      다음
    </button>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.pageSize);
    },
    pages() {
      const range = 2; // 현재 페이지를 중심으로 표시할 범위
      let start = this.pageNumber - range;
      let end = this.pageNumber + range;

      if (start < 1) {
        end += 1 - start;
        start = 1;
      }
      if (end > this.totalPages) {
        start -= end - this.totalPages;
        end = this.totalPages;
      }

      start = Math.max(start, 1);
      end = Math.min(end, this.totalPages);

      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    changePage(newPageNumber) {
      if (newPageNumber >= 1 && newPageNumber <= this.totalPages) {
        this.$emit("change-page", newPageNumber);
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.page-button {
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.page-button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.page-number {
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: #f3f3f3;
  color: #333;
  cursor: pointer;
  border-radius: 5px;
}

.page-number.active {
  background-color: #4caf50;
  color: white;
  font-weight: bold;
}
</style>
