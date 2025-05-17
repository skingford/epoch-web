<template>
<main class="layout">
  <router-view class="layout-right-sidebar" name="LayoutSidebar" />
  <div class="layout-container">
    <router-view class="layout-navigator" name="LayoutNavigator" />
    <router-view class="layout-content" />
  </div>
</main>
</template>
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