<template>
  <div id="goods">
    <div class="title-bar">
      <router-link to="/Home">
        <img src="../../assets/images/return.png" />
      </router-link>
      <span class="title">商品列表</span>
    </div>

    <div class="list">
      <ul>
        <li v-for="item in goods" :key="item.id">
          <span class="left">
            <img src="../../assets/images/1.jpg" />
          </span>

          <span class="right">
            <router-link :to="'/SingleGoods/' + item.id">
              <span>{{ item.name }}&nbsp;&nbsp;</span>
            </router-link>
            <span>{{ item.price | Currency }}</span>
          </span>

          <hr>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods",
  data() {
    return {
      goods: []
    };
  },
  methods: {
    fetchGoods() {
      // get 请求数据
      this.$http.get("http://localhost:3000/goods").then(response => {
        // console.log(response);
        this.goods = response.data;
      });
    }
  },
  created() {
    this.fetchGoods();
  }
};
</script>

<style lang="scss" scoped>
#goods {
  .title-bar {
    padding: 15px 0;

    .title {
      margin-left: 100px;
    }
  }

  .list {
    img {
      width: 80px;
      height: 80px;
    }
  }
}
</style>