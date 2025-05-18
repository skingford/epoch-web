<template>
  <header class="layout-nav">
    <el-icon size="30" class="layout-nav-icon">
      <i-ep-fold />
      <!-- <i-ep-expand /> -->
    </el-icon>
    <div class="layout-nav-content">
      content
    </div>
  </header>
</template>
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
}
</style>