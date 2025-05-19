<template>
  <aside class="layout-sidebar">
    <div class="layout-sidebar-header">
      <div>EPOCH</div>
    </div>
    <el-scrollbar class="layout-sidebar-scrollbar">
      <layout-menu class="layout-menu" />
    </el-scrollbar>
  </aside>
</template>
<script lang="ts" setup>
import LayoutMenu from './LayoutMenu.vue'
</script>

<style lang="scss" scoped>
.layout-sidebar {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--el-menu-border-color);

  &-header {
    height: 55px;
    line-height: 55px;
    text-align: center;
    border-bottom: 1px solid var(--el-menu-border-color);
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  &-scrollbar {
    flex: 1;
  }
}
</style>