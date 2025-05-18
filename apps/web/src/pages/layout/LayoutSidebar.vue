<template>
  <aside class="layout-sidebar">
    <div class="layout-sidebar-header">
      <div>EPOCH</div>
    </div>
    <el-scrollbar class="layout-sidebar-scrollbar">
      <LayoutMenu :menus="menus" />
    </el-scrollbar>
  </aside>
</template>
<script lang="ts" setup>
import LayoutMenu from './LayoutMenu.vue'
import { router } from "@/routes";

const routes = router.getRoutes()

const menus = computed(() => {
  return routes.filter(route => route.meta?.showMenu)
})
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

  .layout-menu {
    &:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
      border-right: none;
    }
  }
}
</style>