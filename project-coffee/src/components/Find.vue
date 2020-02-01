<template>
  <div id="find">
    <h3>Find</h3>



		<nav class="mui-bar mui-bar-tab">
			<router-link to="/Home" class="mui-tab-item" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/Find" class="mui-tab-item" href="#tabbar-with-chat" style="color: #00A1D6">
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
  name: "Find",
  data() {
    return {
      number: store.state.carts.length
    }
  },
  
}
</script>

<style lang="scss" scoped>

</style>