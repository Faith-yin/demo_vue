<template>
  <div id="app">
    <h1>这是登录组件，使用 .vue 文件定义出来的 -- {{ msg }}</h1>
    

    <button type="button" class="mui-btn mui-btn-royal">紫色</button>


  </div>
</template>


<script>
  export default {
    // 注意：组件中的 data 必须是 function
    data() {
      return {
        msg: '123'
      }
    },
    methods: {
      show() {
        console.log("调用了 login.show 中的 show 方法");
      }
    }
  }
</script>


<style>

</style>