<template>
  <div id="single-blog">
    <h2>博客内容详览</h2>
    <div class="item">
      <h3>{{ singleBlog.title }}</h3>
      <article>{{ singleBlog.body }}</article>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      singleBlog: {}
    };
  },
  created() {
    // this.$http.get("https://jsonplaceholder.typicode.com/posts/" + this.id)
    axios.get("/posts/" + this.id).then(data => {
      // this.singleBlog = data.body;
      this.singleBlog = data.data;
    });
  }
};
</script>


<style lang="scss" scoped>
#single-blog {
  width: 100%;
  height: 100%;

  .item {
    margin: 15px 0;
    padding: 10px;
    border-radius: 4px;
    background-color: #eee;
  }
}
</style>