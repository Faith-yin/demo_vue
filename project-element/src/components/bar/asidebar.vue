<template>
  <div class="layout-asidebar">
    <div class="asidebar">
      <el-container>
        <el-aside>
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-star-on"></i>功能模块
              </template>
              <el-menu-item>地图</el-menu-item>
              <el-menu-item>日历</el-menu-item>
              <el-menu-item>图片裁剪</el-menu-item>
            </el-submenu>
          </el-menu>
          <el-menu>
            <el-menu-item>
              <i class="el-icon-picture"></i>美图
            </el-menu-item>
          </el-menu>
          <el-menu>
            <el-menu-item><i class="el-icon-c-scale-to-original"></i>富文本</el-menu-item>
          </el-menu>
          <el-menu>
            <el-menu-item><i class="el-icon-tickets"></i>表格</el-menu-item>
          </el-menu>
          <el-menu>
            <el-menu-item><i class="el-icon-edit-outline"></i>表格编辑</el-menu-item>
          </el-menu>
          <el-menu>
            <el-menu-item><i class="el-icon-user"></i>个人信息</el-menu-item>
          </el-menu>
        </el-aside>
      </el-container>
    </div>
  </div>
</template>


<script>
export default {
  name: "asidebar",
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
.layout-asidebar {
  width: 300px;
  height: 100%;
  float: left;
}
.el-aside {
  height: 650px;
  border-right: 1px solid #eee;
}
</style>