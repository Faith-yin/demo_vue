<template>
  <div id="single-goods">
    <div class="title-bar">
      <span @click="$router.back(-1)">
        <img src="../../assets/images/return.png" />
      </span>
      <span class="title">商品信息</span>
    </div>

    <div class="first">
      <span>{{ this.singleGoods.name }}&nbsp;&nbsp;</span>
      <span>{{ this.singleGoods.price | Currency }}</span>
    </div>

    <div class="second">
      <p>{{ this.singleGoods.count }}人付款</p>
      <p>货源地：{{ this.singleGoods.area }}</p>
    </div>

    <div class="button-box">
      <button @click="add">加入购物车</button>
      <button @click="buy">立即购买</button>
    </div>

    <br>

    <div class="third">
      <span>{{ this.singleGoods.info }}</span>
    </div>
  </div>
</template>

<script>
import store from "../../store.js";
import { Toast } from "mint-ui";
import { MessageBox } from "mint-ui";

export default {
  name: "SinleGoods",
  data() {
    return {
      singleGoods: []
    };
  },
  methods: {
    fetchSingleGoods(id) {
      // 加载商品
      this.$http
        .get("http://localhost:3000/singlegoods/" + id)
        .then(response => {
          // console.log(response);
          this.singleGoods = response.data;
        });
    },
    add() {
      // 加入购物车
      var id = this.singleGoods.id;
      if (store.state.carts == 0) {
        // console.log('购物车里空空如也！');

        store.commit("addGoods", {
          id: this.singleGoods.id,
          name: this.singleGoods.name,
          price: this.singleGoods.price,
          count: 1
        });
        // console.log(store.state.carts);
        // console.log('添加购物车成功！');
        Toast({
          message: "添加购物车成功！",
          position: "bottom",
          duration: 2000
        });
      } else {
        var flag = false;

        store.state.carts.some(item => {
          if (item.id == id) {
            flag = true;
            // alert('购物车中已有此商品，请勿重复添加！');
            MessageBox("提示", "购物车中已有此商品，请勿重复添加！");
            return true;
          }
        });

        if (!flag) {
          store.commit("addGoods", {
            id: this.singleGoods.id,
            name: this.singleGoods.name,
            price: this.singleGoods.price,
            count: 1
          });
          // console.log(store.state.carts);
          // console.log('添加购物车成功！');
          Toast({
            message: "添加购物车成功！",
            position: "bottom",
            duration: 2000
          });
        }
      }
    },
    buy() {
      // 购买商品
      // console.log(this.singleGoods.id);
      MessageBox("提示", "此功能正在开发中...");
    }
  },
  created() {
    this.fetchSingleGoods(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
#single-goods {

  .title-bar {
    padding: 15px 0;

    .title {
      margin-left: 100px;
    }
  }

  .first {
    font-size: 25px;
    padding: 15px 0;
  }

}
</style>