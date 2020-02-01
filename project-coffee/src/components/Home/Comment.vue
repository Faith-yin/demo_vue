<template>
  <div id="comment">
    <div class="title-bar">
      <router-link to="/Home">
        <img src="../../assets/images/return.png" />
      </router-link>
      <span class="title">发表评论</span>
    </div>

    <label>用户名</label>
    <input v-model="newComment.name" type="text" />
    <label>内容</label>
    <textarea v-model="newComment.content" cols="30" rows="10"></textarea>
    <br />
    <button @click="publish">发表</button>

    <hr />

    <div class="list" v-for="(item,index) in comment" :key="item.id">
      <span>第 {{ (index + 1) }} 楼用户：{{ item.name }} &nbsp;&nbsp;</span>
      <a @click="del(item.id)">删除</a>
      <p>发表时间：{{ item.time | dateFormat }}</p>

      <p>{{ item.content }}</p>

      <hr />

    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { MessageBox } from "mint-ui";

export default {
  name: "Comment",
  data() {
    return {
      newComment: {},
      comment: [],
    };
  },
  methods: {
    fetchComments() {
      // 加载评论
      this.$http.get("http://localhost:3000/comments").then(response => {
        // console.log(response);
        this.comment = response.data;
      });
    },
    publish() {
      // 提交评论
      if (!this.newComment.name || !this.newComment.content) {
        // alert('请填写相应内容！');
        MessageBox("提示", "请填写相应内容！");
      } else {
        let addComment = {
          name: this.newComment.name,
          content: this.newComment.content,
          time: this.newComment.time
        };
        this.$http
          .post("http://localhost:3000/comments", addComment)
          .then(response => {
            // console.log(response);
            this.newComment.name = "";
            this.newComment.content = "";
            this.newComment.time = new Date();
            // console.log('评论成功！');
            Toast({
              message: "评论成功！",
              position: "bottom",
              duration: 2000
            });
            this.fetchComments();
          });
      }
    },
    del(id) {
      // 删除评论
      MessageBox.confirm("确认要删除吗？").then(action => {
        this.$http
          .delete("http://localhost:3000/comments/" + id)
          .then(response => {
            // console.log(id + '--删除成功！');
            Toast({
              message: "删除成功！",
              position: "bottom",
              duration: 2000
            });
            this.fetchComments();
          });
      });
    }
  },
  created() {
    this.fetchComments();
  }
};
</script>

<style lang="scss" scoped>
#comment {
  .title-bar {
    padding: 15px 0;

    .title {
      margin-left: 100px;
    }
  }
}
</style>