<template>
<el-container style="height: 100vh; overflow: auto;">
  <p style="text-align: center;font-size: larger;">2025 haisen 管理系统</p>
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" >处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
    <el-submenu index="3">
    <template slot="title">消息中心</template>
    <el-menu-item index="3-1">选项1</el-menu-item>
    <el-menu-item index="3-2">选项1</el-menu-item>
    <el-menu-item index="3-3">选项1</el-menu-item>
    </el-submenu>
  <el-menu-item index="4"><a href="https://lol.qq.com/main.shtml" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </el-header>

  <el-container>
    <el-row class="tac">
    <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
        </template>
      <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
          <template slot="title">分组二</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      </el-submenu>


      <el-submenu index="3" >
        <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
        </template>
      <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
          <template slot="title">分组二</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
          <template slot="title">分组二</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
    </el-row>
  <el-container>
  <el-main>
    
  </el-main>
  </el-container>

  </el-container>


  <el-footer>
    Footer
  </el-footer>
</el-container>

</template>

<script>
export default {
    data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    }
  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 500px;
    height: 700px;
    overflow: auto; /* 允许滚动 */
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 80px;
    height: 200px; /* 设置固定高度 */
    overflow-y: auto; /* 允许垂直滚动 */
  }
  .el-menu-vertical-demo {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 650px; /* 设置固定高度 */
  overflow-y: auto; /* 允许垂直滚动 */
}
</style>
