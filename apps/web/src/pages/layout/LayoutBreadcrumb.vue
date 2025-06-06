<template>
  <div class="layout-breadcrumb">
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item to="/">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in breadcrumbs" :key="item.path">
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
  return matched.reduce<BreadcrumbItem[]>((acc, item) => {
    if (item.meta?.title) {
      acc.push({
        path: item.path,
        title: item.meta.title as string
      })
    }
    return acc
  }, [])
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