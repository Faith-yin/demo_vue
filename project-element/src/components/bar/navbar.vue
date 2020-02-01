<template>
  <div class="layout-navbar">
    <div class="navbar">
      <el-container>
        <el-header>
          <span>
            <span>Faith</span>
            <i class="el-icon-menu"></i>
          </span>
          <span class="right-info">
            <span>1207828715</span>
            <img class="head-photo" src="../../assets/img/头像01.jpg" />
            <img class="en-ch" src="../../assets/img/britain.png" />
          </span>
        </el-header>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="arrow-bar">
          <el-breadcrumb-item>功能模块</el-breadcrumb-item>
          <el-breadcrumb-item>日历</el-breadcrumb-item>
        </el-breadcrumb>
      </el-container>
    </div>
  </div>
</template>


<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
};
</script>


<style lang="scss" scoped>
.layout-navbar {
  width: 100%;
  height: 100%;
}
.navbar {
  width: 100%;
  height: 90px;
  .el-header {
    background-color: #3475d6;
    line-height: 60px;
    color: #fff;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    i {
      margin-left: 140px;
    }
    .right-info {
      img.head-photo {
        border-radius: 100%;
        width: 35px;
        height: 35px;
        margin: 0 10px;
        vertical-align: middle;
      }
      img.en-ch {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
    }
  }
  .arrow-bar {
    margin: 10px 300px;
  }
}
</style>