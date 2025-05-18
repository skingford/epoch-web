<template>
  <div class="bg">
    <h1>Manager</h1>
    <el-icon size="25"><i-ep-search /></el-icon>
    <el-button type="primary" @click="open">I am ElButton</el-button>
  </div>
</template>
<script setup lang="ts">
const open = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
</script>
<style lang="scss" scoped>
.bg {
  background: #f0f2f5;
  font-size: 16px;
  padding: 10px 12px;
  color: #333;
}
</style>