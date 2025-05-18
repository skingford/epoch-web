<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive :max="10" :include="keeps">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import { Version } from '@epoch/kit';
import { buildKeepAliveRoutes, router } from "@/routes";

console.log('[ Version ] >', Version());

const size = ref<'default' | 'small' | 'large'>('default')
const zIndex = ref(3000)

const routes = router.getRoutes()
const keeps = buildKeepAliveRoutes(routes);


console.log('[ routes ] >', routes, keeps)



</script>
