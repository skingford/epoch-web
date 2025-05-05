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
import { getKeepAliveRoutes } from "@/routes";

const keeps = getKeepAliveRoutes();
</script>
