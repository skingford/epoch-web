<template>
  <div class="login-container">
    <transition name="fade-transform" mode="out-in">
      <el-card class="login-card" key="login-card">
        <template #header>
          <div class="card-header">
            <h2>欢迎登录</h2>
          </div>
        </template>
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" label-position="top"
          @keyup.enter="handleLogin">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名" :prefix-icon="User" size="large" />
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" :prefix-icon="Lock" show-password
              size="large" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" size="large" :loading="loading" class="login-button" @click="handleLogin">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()

const loginFormRef = useTemplateRef<FormInstance>('loginFormRef')
const loading = ref(false)

const loginForm = reactive({
  username: '',
  password: ''
})

const loginRules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ]
})

const handleLogin = async () => {
  if (!loginFormRef.value) return

  try {
    await loginFormRef.value.validate()
    loading.value = true

    // TODO: 实现登录逻辑
    console.log('登录表单数据：', loginForm)
    router.push('/manager')
    ElMessage.success('登录成功')
    // 使用相对路径，因为 manager 现在是 layout 的子路由

  } catch (error) {
    console.error('表单验证失败：', error)
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #667eea;
$secondary-color: #764ba2;
$box-shadow-color: rgba(0, 0, 0, 0.1);
$input-border-color: #dcdfe6;
$input-hover-border-color: #c0c4cc;
$font-color: #303133;
$font-size-large: 24px;
$font-size-medium: 16px;
$border-radius: 8px;
$max-width-mobile: 480px;

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.login-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.5;
  }
}

.login-card {
  width: 100%;
  max-width: 420px;
  border-radius: $border-radius;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin: 20px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
}

.card-header {
  text-align: center;
  padding: 20px 0;

  h2 {
    margin: 0;
    color: $font-color;
    font-size: $font-size-large;
    font-weight: 600;
    background: linear-gradient(45deg, $primary-color, $secondary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeIn 1s ease-out;
  }
}

.login-button {
  width: 100%;
  padding: 12px 0;
  font-size: $font-size-medium;
  transition: all 0.3s ease;
  background: linear-gradient(45deg, $primary-color, $secondary-color);
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba($primary-color, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
}

:deep(.el-form-item__label) {
  font-weight: 500;
  transition: color 0.3s ease;
}

:deep(.el-input__wrapper) {
  box-shadow: 0 0 0 1px $input-border-color inset;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);

  &:hover {
    box-shadow: 0 0 0 1px $input-hover-border-color inset;
    transform: translateY(-1px);
  }

  &.is-focus {
    box-shadow: 0 0 0 2px rgba($primary-color, 0.2) inset;
    transform: translateY(-2px);
  }
}

:deep(.el-input__inner) {
  transition: all 0.3s ease;
}

@media (max-width: $max-width-mobile) {
  .login-card {
    max-width: calc(100% - 40px);
    margin: 20px;
  }

  .card-header h2 {
    font-size: 20px;
  }
}
</style>
