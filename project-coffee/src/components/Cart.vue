<template>
  <div id="cart">

    <h3 v-show="trigger">{{ flag }}</h3>

    <ul :sign="signCount" class="mui-table-view">
      <li v-for="item in newCarts" :key="item.id" class="mui-table-view-cell">
        <div class="first">
          <span>{{ item.name }}&nbsp;&nbsp;</span>
          <span>{{ item.price | Currency }}</span>
        </div>
        <div class="second">
          <button @click="decrease(item.id)">-</button>
          <span>{{ item.count }}</span>
          <button @click="increase(item.id)">+</button>

          <button @click="del(item.id)">删除</button>
        </div>

        <div>id：{{ item.id }}</div>
      </li>
    </ul>

    <div class="base">
      <span>宝贝类别数目：{{ number }} &nbsp;&nbsp;</span>
      <span>宝贝总价：{{ price | Currency }}</span>
    </div>


    <nav class="mui-bar mui-bar-tab">
			<router-link to="/Home" class="mui-tab-item" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/Find" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-map"></span>
				<span class="mui-tab-label">发现</span>
			</router-link>
			<router-link to="/Cart" class="mui-tab-item" href="#tabbar-with-contact" style="color: #00A1D6">
				<span class="mui-icon mui-icon-flag"><span class="mui-badge">{{ number }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/Person" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>


  </div>
</template>

<script>
import store from "../store.js";
import { Toast } from "mint-ui";
import { MessageBox } from "mint-ui";

export default {
  name: "Cart",
  data() {
    return {
      flag: "购物车里空空如也！",
      trigger: false,
      price: "0",
      arrPrice: []
    };
  },
  methods: {
    del(id) {// 删除某个宝贝的操作
      var sign = false;

      MessageBox.confirm("是否确认移除此宝贝？").then(action => {
        store.state.carts.some(item => {
          if (item.id == id) {
            sign = true;
            return true;
          }
        });

        if (sign) {
          for (var i = 0; i < store.state.carts.length; i++) {
            if (store.state.carts[i].id === id) {
              store.state.carts.splice(i, 1);
              Toast({
                message: "已移除此宝贝！",
                position: "bottom",
                duration: 2000
              });
            }
          }
        }
      });
    },
    decrease(id) {// 减少单类宝贝数量
      for (var i = 0; i < store.state.carts.length; i++) {
        if (store.state.carts[i].id === id) {
          if (store.state.carts[i].count > 1) {
            store.state.carts[i].count--;
          } else {
            // alert('宝贝数量已达到最小！');
            MessageBox("提示", "宝贝数量已达到最小！");
          }
        }
      }
    },
    increase(id) {// 增加单类宝贝数量
      for (var j = 0; j < store.state.carts.length; j++) {
        if (store.state.carts[j].id === id) {
          if (store.state.carts[j].count < 10) {
            store.state.carts[j].count++;
          } else {
            // alert('宝贝数量已达到最大！');
            MessageBox("提示", "宝贝数量已达到最大！");
          }
        }
      }
    },
    updatePrice() {// 更新宝贝总价
      if (store.state.carts != 0) {
        for (var k = 0; k < store.state.carts.length; k++) {
          this.arrPrice.push(
            store.state.carts[k].price * store.state.carts[k].count
          );
        }
        // console.log(this.arrPrice);

        var totalPrice = 0;
        for (var m = 0; m < this.arrPrice.length; m++) {
          totalPrice += this.arrPrice[m];
        }
        // console.log(totalPrice);

        this.price = totalPrice;
        this.arrPrice.splice(0);
      } else {
        this.price = 0;
      }
    },
    judgeCartNull() {// 判断购物车是否为空
      if (store.state.carts == 0) {
        this.trigger = true;
        Toast({
          message: "您还没有往购物车里添加宝贝！",
          position: "bottom",
          duration: 2000
        });
      } else {
        return;
      }
    }
  },
  computed: {
    newCarts() {
      return store.state.carts;
    },
    number() {
      this.judgeCartNull();
      return store.state.carts.length;
    },
    signCount() {
      this.updatePrice();
    }
  },
  created() {
    this.judgeCartNull();
  }
};
</script>

<style lang="scss" scoped>
#cart {
  margin-bottom: 80px;

  h3 {
    color: skyblue;
    padding: 15px 0;
    text-align: center;
  }


}
</style>