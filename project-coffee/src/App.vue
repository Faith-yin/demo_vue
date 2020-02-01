<template>
  <div id="app">

<!-- keep-alive是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。 -->
    <keep-alive include="News">
      <!-- 需要被缓存的 -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <transition mode="out-in">
      <!-- 不需要被缓存的 -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 2px;
  text-decoration: none;
  list-style-type: none;
}
</style>