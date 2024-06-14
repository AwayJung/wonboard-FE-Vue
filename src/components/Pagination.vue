<template>
  <div>
    <button @click="prevPage">*</button>
    <button @click="nextPage">></button>
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
  },
  methods: {
    nextPage() {
      this.$emit("change-page", this.pageNumber + 1);
    },
    prevPage() {
      if (this.pageNumber > 1) {
        this.$emit("change-page", this.pageNumber - 1);
      }
    },
  },
};
</script>
