<template>
  <div id="single-news">
    <div class="title-bar">
      <span @click="$router.back(-1)">
        <img src="../../assets/images/return.png" />
      </span>
      <span class="title">{{ this.singleNews.title }}</span>
    </div>

    <div class="content">
      <h4></h4>
      <p>
        作者：
        <span>{{ this.singleNews.author }}</span>
      </p>
      <p>
        发布时间：
        <span>{{ this.singleNews.time | dateFormat }}</span>
      </p>
      <p>
        浏览次数：
        <span>{{ this.singleNews.count }}</span>
      </p>

      <div>{{ this.singleNews.content }}</div>

      <button @click="del()">删除此资讯</button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { MessageBox } from "mint-ui";

export default {
  name: "SingleNews",
  data() {
    return {
      singleNews: [],
    };
  },
  methods: {
    fetchSingleNews(id) { // 加载资讯
      this.$http
        .get("http://localhost:3000/news/" + id)
        .then(response => {
          // console.log(response);
          this.singleNews = response.data;
        })
        .catch(error => {
          console.log("error: ",error);
        });
    },
    del() { // 删除资讯
      MessageBox.confirm("是否确认删除？").then(action => {
        this.$http
          .delete("http://localhost:3000/news/" + this.$route.params.id)
          .then(response => {
            // console.log('删除成功！');
            Toast({
              message: "删除资讯成功！",
              position: "bottom",
              duration: 2000
            });
            this.$router.go(-1);
          });
      });
    }
  },
  created() {
    this.fetchSingleNews(this.$route.params.id);
    // console.log(this.$route);
  }
};
</script>

<style lang="scss" scoped>
#single-news {
  .title-bar {
    width: 100%;
    padding: 15px 0;
    background-color: rgb(207, 205, 205);
    position: fixed;

    .title {
      margin-left: 100px;
    }
  }

  .content {
    padding-top: 65px;
  }
}
</style>