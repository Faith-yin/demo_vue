<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}

.el-table__body tr.current-row > td {
  background-color: #ecf5ff !important;
}
</style>
