<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive :max="10" :include="keeps">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>
<script setup lang="ts">
import { Version } from '@epoch/kit';
import { buildKeepAliveRoutes, router } from "@/routes";

console.log('[ Version ] >', Version);

const routes = router.getRoutes()
const keeps = buildKeepAliveRoutes(routes);


console.log('[ routes ] >', routes, keeps)

</script>
