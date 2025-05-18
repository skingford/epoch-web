<template>
  <div class="layout-breadcrumb">
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/user">用户中心</el-breadcrumb-item>
      <el-breadcrumb-item to="/user/coupon">优惠券</el-breadcrumb-item>
      <el-breadcrumb-item to="/user/profile">个人资料</el-breadcrumb-item>
      <el-breadcrumb-item to="/manager">管理中心</el-breadcrumb-item>
      <el-breadcrumb-item to="/manager/setting">设置</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.layout-breadcrumb {
  border-bottom: 1px solid var(--el-menu-border-color);
  height: 40px;
  line-height: 40px;
  padding: 0 20px;

  .breadcrumb {
    height: 40px;
    line-height: 40px;
  }
}
</style>