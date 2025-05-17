<template>
  <div class="bg">
    home main
    <el-button type="primary" @click="open">I am ElButton</el-button>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'

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