<template>
  <header class="layout-nav">
    <el-icon size="30" class="layout-nav-icon">
      <i-ep-fold />
      <!-- <i-ep-expand /> -->
    </el-icon>
    <div class="layout-nav-content">
      <div class="layout-nav-content-item">
        <el-icon size="24" class="nav-icon">
          <i-ep-refresh />
        </el-icon>
      </div>
      <div class="layout-nav-content-item">
        <el-icon size="24" class="nav-icon">
          <i-ep-full-screen />
        </el-icon>
      </div>
      <div class="layout-nav-content-item">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <span>admin</span>
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Plus">个人中心</el-dropdown-item>
              <el-dropdown-item :icon="CirclePlusFilled">
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import {
  ArrowDown,
  CirclePlusFilled,
  Plus,

} from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.layout-nav {
  height: 55px;
  line-height: 55px;
  padding: 0 20px;
  border-bottom: 1px solid var(--el-menu-border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-icon {
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--el-color-primary);
      transform: scale(1.1);
    }
  }

  &-content {
    display: flex;
    align-items: center;
    height: 100%;

    &-item {
      display: flex;
      align-items: center;
      padding: 0 10px;
      height: 100%;
      cursor: pointer;
    }
  }
}
</style>