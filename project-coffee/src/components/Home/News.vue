<template>
  <div id="news">
    <div class="title-bar">
      <router-link to="/Home">
        <img src="../../assets/images/return.png" />
      </router-link>
      <span class="title">咖啡资讯</span>
    </div>

    <ul class="mui-table-view">
      <li v-for="item in news.slice(0,num)" :key="item.id">
        <!-- 如果使用router-link标签，加上@click事件，绑定的事件会无效因为：router-link的作用是单纯的路由跳转，会阻止click事件，你可以试试只用click不用native,事件是不会触发的。此时加上.native，才会触发事件。 -->
        <router-link
          :to="'/SingleNews/' + item.id"
          @click.native="caculateCount(item.id)"
        >{{ item.title }}</router-link>
        <!-- <p>发布时间：
          <span>{{ item.time }}</span>
        </p>-->
        <p>
          作者：
          <span>{{ item.author }}</span>
        </p>

        <hr />
      </li>
    </ul>

    <div v-if="num < news.length" @click="loadMore" class="more">加载更多...</div>
    <div v-else class="noMore">没有更多了...</div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: [],
      num: 5
    };
  },
  methods: {
    fetchNews() {
      // 加载资讯
      this.$http.get("http://localhost:3000/news").then(response => {
        // console.log(response);
        this.news = response.data;
      });
    },
    caculateCount(id) {
      // 计算点击次数
      this.$http.get("http://localhost:3000/news/" + id).then(response => {
        var newSingleNews = {
          id: response.data.id,
          title: response.data.title,
          content: response.data.content,
          time: response.data.time,
          count: response.data.count + 1,
          author: response.data.author
        };

        this.$http
          .put("http://localhost:3000/news/" + id, newSingleNews)
          .then(response => {
            // console.log(response.data.count);
          });
      });
    },
    loadMore() {
      // 加载更多
      this.num += 5;
    }
  },

  created() {
    this.fetchNews();
  }
};
</script>

<style lang="scss" scoped>
#news {
  .title-bar {
    margin: 10px 0;
    .title {
      margin-left: 100px;
    }
  }
  .more {
    text-align: center;
    line-height: 35px;
    background-color: rgb(195, 215, 216);
    font-size: 17px;
  }
  .noMore {
    text-align: center;
    font-size: 13px;
  }
}
</style>