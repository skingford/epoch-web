<template>
  <el-menu class="layout-menu" router :default-active="$route.path" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose">
    <menu-item :menus="menus" />
  </el-menu>
</template>

<script setup>
import * as Icons from '@element-plus/icons-vue'
import MenuItem from './MenuItem.vue'

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

const emit = defineEmits(['open', 'close'])

const route = useRoute()
const fullPath = computed(() => {
  if (props.parent && props.parent.path) {
    return `${props.parent.path}`
  }
  return route.path
})


const handleOpen = (key, keyPath) => {
  emit('open', key, keyPath)
}

const handleClose = (key, keyPath) => {
  emit('close', key, keyPath)
}

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
  console.log('[ props.parent ] >', props.parent)
  if (props.parent && props.parent.path) {
    return `${props.parent.path}/${menu.path}`
  }
  return `${menu.path}`
}
</script>