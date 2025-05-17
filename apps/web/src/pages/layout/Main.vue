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
  background: #f5f5f5;
  font-size: 16px;
  padding: 20px;
  color: #333;
}
</style>