<template>
  <div class="login-container">
    <el-card class="login-card">
      <template #header>
        <div class="card-header">
          <h2>欢迎登录</h2>
        </div>
      </template>
      <el-form
ref="loginFormRef" :model="loginForm" :rules="loginRules" label-position="top"
        @keyup.enter="handleLogin">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" :prefix-icon="User" size="large" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
v-model="loginForm.password" type="password" placeholder="请输入密码" :prefix-icon="Lock" show-password
            size="large" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="large" :loading="loading" class="login-button" @click="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()

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


    await authStore.login({
      account: loginForm.username,
      password: loginForm.password
    })

    console.log("--- login success-----")

    ElMessage.success('登录成功')
    router.push('/')
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

.login-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;

  .login-card {
    width: 100%;
    max-width: 420px;
    border-radius: $border-radius;
    box-shadow: 0 4px 16px $box-shadow-color;
    margin: 20px;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.95);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }

    .card-header {
      text-align: center;

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
        box-shadow: 0 0 0 1px var(--el-color-primary) inset;
        transform: translateY(-2px);
      }
    }

    :deep(.el-input__inner) {
      transition: all 0.3s ease;
    }
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
