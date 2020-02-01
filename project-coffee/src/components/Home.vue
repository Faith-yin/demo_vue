<template>




  <div id="home">
    <h3>首页菜单</h3>
    <div class="menu">
      <ul class="mui-table-view">
          <li class="mui-table-view-cell">
            <router-link to="/News" class="mui-navigate-right">咖啡资讯</router-link>
          </li>

        <li class="mui-table-view-cell">
          <router-link to="/Goods" class="mui-navigate-right">商品购买</router-link>
        </li>

        <li class="mui-table-view-cell">
          <router-link to="/Comment" class="mui-navigate-right">留言评论</router-link>
        </li>

        <li class="mui-table-view-cell">
          <router-link to="/Contact" class="mui-navigate-right">联系我们</router-link>
        </li>
      </ul>
    </div>


		<nav class="mui-bar mui-bar-tab">
        <router-link to="/Home" class="mui-tab-item" href="#tabbar" style="color: #00A1D6">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>

			<router-link to="/Find" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-map"></span>
				<span class="mui-tab-label">发现</span>
			</router-link>

			<router-link to="/Cart" class="mui-tab-item" href="#tabbar-with-contact">
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
import store from '../store'

export default {
  name: "Home",
  data() {
    return {
      number: store.state.carts.length
    };
  }
};
</script>

<style lang="scss" scoped>


</style>