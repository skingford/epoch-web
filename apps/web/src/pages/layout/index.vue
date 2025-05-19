<template>
  <main class="layout">
    <LayoutSidebar />
    <div class="layout-container">
      <LayoutNav />
      <HistoryRoute />
      <LayoutView class="layout-content" />
    </div>
  </main>
</template>
<script setup lang="ts">
import LayoutSidebar from './LayoutSidebar.vue';
import LayoutNav from './LayoutNav.vue';
import LayoutView from './LayoutView.vue';
import HistoryRoute from './HistoryRoute.vue';

</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  &-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &-content {
    flex: 1;
  }
}
</style>