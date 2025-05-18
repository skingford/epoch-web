<template>
  <template v-for="menu in menus" :key="menu.path">
    <el-sub-menu v-if="menu.children?.length" :index="menu.path">
      <template #title>
        <el-icon v-if="menu.meta?.icon">
          <component :is="getIconComponent(menu.meta.icon)" />
        </el-icon>
        <span>{{ menu.meta?.title }}</span>
      </template>

      <!-- 递归调用子菜单 -->
      <menu-item :menus="menu.children" :parent="menu" />
    </el-sub-menu>

    <!-- 没有子菜单的情况 -->
    <el-menu-item v-else :index="buildPath(menu)">
      <el-icon v-if="menu.meta?.icon">
        <component :is="getIconComponent(menu.meta.icon)" />
      </el-icon>
      <template #title>{{ menu.meta?.title }} </template>
    </el-menu-item>
  </template>
</template>

<script setup>
import * as Icons from '@element-plus/icons-vue'

const props = defineProps({
  menus: {
    type: Array,
    required: true
  },
  parent: {
    type: Object,
    default: () => ({})
  },
  isCollapse: {
    type: Boolean,
    default: false
  }
})

const getIconComponent = (iconName) => {
  if (!iconName) return null
  if (typeof iconName === 'object') return iconName

  // 处理多种图标命名格式
  const iconKey = iconName
    .replace(/^el-icon-/, '')
    .replace(/^[a-z]/, m => m.toUpperCase())
    .replace(/-([a-z])/g, (_, p1) => p1.toUpperCase())

  return Icons[iconKey] || null
}

const buildPath = (menu) => {
  if (props.parent && props.parent.path) {
    return `${props.parent.path}/${menu.path}`
  }
  return `${menu.path}`
}
</script>