<template>
  <div id="person">
    <h3>个人中心</h3>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell">
        <router-link to="/Add" class="mui-navigate-right">发布资讯</router-link>
      </li>
      <li class="mui-table-view-cell">
        <a @click="exit" class="mui-navigate-right">退出登录</a>
        <!-- <router-link to="#" class="mui-navigate-right" @click.native="exit">退出登录</router-link> -->
      </li>
    </ul>


    <nav class="mui-bar mui-bar-tab">
			<router-link to="/Home" class="mui-tab-item" href="#tabbar">
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
			<router-link to="/Person" class="mui-tab-item" href="#tabbar-with-map" style="color: #00A1D6">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>


  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { MessageBox } from 'mint-ui'
import store from '../store'

export default {
  name: "Person",
  data() {
    return {
      number: store.state.carts.length
    }
  },
  methods: {
    exit() {
      MessageBox.confirm('确定要退出系统吗？').then(action => {
        Toast({
          message: '已退出登录！',
          position: 'bottom',
          duration: 2000,
        });
        this.$router.push('/');
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#person {
    h3 {
    background-color: rgb(207, 205, 205);
    color: skyblue;
    padding: 15px 0;
    text-align: center;
  }


}

</style>