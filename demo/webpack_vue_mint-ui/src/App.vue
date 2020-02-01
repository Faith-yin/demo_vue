<template>
  <div>
    <h1>这是 App 组件</h1>


    <mt-button type='primary'>按钮1</mt-button>

    <mt-button type='danger' size='small' disabled>按钮2</mt-button>

    <mt-button icon='more' plain>按钮3</mt-button>

    <mybtn type='danger'>按钮4</mybtn>


    <router-link to='/account'>Account</router-link>
    <router-link to='/goodslist'>GoodsList</router-link>

    <router-view></router-view>
  </div>
</template>


<script>
export default {
  
}
</script>


<style>
  
</style>