<template>
  <aside class="layout-sidebar">
    <div class="layout-sidebar-header">
      <div>管理系统</div>
    </div>
    <el-scrollbar class="layout-sidebar-scrollbar">
      <el-menu default-active="2" class="layout-menu" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>设置</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.layout-sidebar {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--el-menu-border-color);

  // height: 100%;
  // width: 200px;
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