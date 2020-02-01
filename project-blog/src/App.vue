<template>
  <div id="app">
    <div class="nav">
      <router-link to="/ShowBlog" class="link">我的博客</router-link>
      <router-link to="/AddBlog" class="link">写博客</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
#app {
  width: 800px;
  margin: 0 auto;

  .nav {
    background-color: antiquewhite;
    border-radius: 5px;

    .link {
      display: inline-block;
      padding: 15px 20px;
      background-color: antiquewhite;
      text-decoration: none;
    }

    .router-link-active {
      background-color: rgb(248, 211, 162);
    }
  }
}
</style>
