<template>
  <el-menu
class="layout-menu" router unique-opened :default-active="$route.path" :collapse="isCollapse"
    @open="handleOpen" @close="handleClose">
    <menu-item :menus="menus" />
  </el-menu>
</template>

<script setup>
import MenuItem from './MenuItem.vue'
import { router } from "@/routes";

const emit = defineEmits(['open', 'close'])

const isCollapse = ref(false)

const routes = router.getRoutes()
const menus = computed(() => {
  return routes.filter(route => route.meta?.showMenu)
})

const handleOpen = (key, keyPath) => {
  emit('open', key, keyPath)
}

const handleClose = (key, keyPath) => {
  emit('close', key, keyPath)
}
</script>
<style lang="scss" scoped>
.layout-menu {
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    border-right: none;
  }
}
</style>