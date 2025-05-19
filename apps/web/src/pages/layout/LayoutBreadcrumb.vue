<template>
  <div class="layout-breadcrumb">
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item v-for="item in breadcrumbs" :key="item.path" :to="item.path">
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import type { RouteLocationMatched } from 'vue-router'

interface BreadcrumbItem {
  path: string
  title: string
}

const route = useRoute()
const breadcrumbs = ref<BreadcrumbItem[]>([])

// 生成面包屑数据
const generateBreadcrumbs = (matched: RouteLocationMatched[]) => {
  const items: BreadcrumbItem[] = []
  
  // 始终添加首页
  items.push({
    path: '/',
    title: '首页'
  })

  // 遍历路由匹配记录
  matched.forEach(item => {
    // 跳过没有 meta.title 的路由
    if (item.meta?.title) {
      items.push({
        path: item.path,
        title: item.meta.title as string
      })
    }
  })

  return items
}

// 监听路由变化
watch(
  () => route.matched,
  (matched) => {
    breadcrumbs.value = generateBreadcrumbs(matched)
  },
  { immediate: true }
)
</script>

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