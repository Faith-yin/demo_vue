<template>
  <div id="add">
    <div class="title-bar">
      <router-link to="/Person">
        <img src="../assets/images/return.png" alt />
      </router-link>
      <span class="title">添加资讯</span>
    </div>

    <form>
      <label>标题：</label>
      <br />
      <input type="text" v-model="news.title" />
      <br />

      <label>内容：</label>
      <br />
      <textarea v-model="news.content" cols="30" rows="10"></textarea>
      <br />

      <label>作者：</label>
      <br />
      <input type="text" v-model="news.author" />
      <br />

      <button @click.prevent="finish">完成</button>
    </form>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { MessageBox } from "mint-ui";

export default {
  name: "Add",
  data() {
    return {
      news: {}
    };
  },
  methods: {
    finish() {
      // 添加完成操作
      if (!this.news.title || !this.news.content || !this.news.author) {
        // alert('请填写相应信息！');
        MessageBox("提示", "请填写相应信息！");
      } else {
        let newNews = {
          title: this.news.title,
          content: this.news.content,
          count: 0,
          time: new Date(),
          author: this.news.author
        };
        this.$http
          .post("http://localhost:3000/news", newNews)
          .then(response => {
            this.news.title = "";
            this.news.content = "";
            this.news.author = "";
            Toast({
              message: "添加资讯成功！",
              position: "bottom",
              duration: 2000
            });
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#add {
  .title-bar {
    padding: 15px 0;

    .title {
      margin-left: 100px;
    }
  }
}
</style>