<template>
  <div class="login-container">
    <el-card class="login-card">
      <template #header>
        <div class="card-header">
          <h2 class="typing-text">
            <template v-for="(char, index) in displayText" :key="index">
              <span class="char" :class="{ 'particle': isTyping && index === displayText.length - 1 }">{{ char }}</span>
            </template>
            <span v-if="isTyping" class="cursor">|</span>
          </h2>
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

// 打字机效果相关
const fullText = '欢迎登录'
const displayText = ref('')
const isTyping = ref(true)
const typingSpeed = 80 // 每个字的打印间隔（毫秒）
const particleDelay = 50 // 粒子效果延迟

onMounted(() => {
  let currentIndex = 0
  const typeText = () => {
    if (currentIndex < fullText.length) {
      displayText.value += fullText[currentIndex]
      currentIndex++
      setTimeout(typeText, typingSpeed + Math.random() * 50) // 添加随机延迟，增加自然感
    } else {
      // 打印完成后移除光标
      setTimeout(() => {
        isTyping.value = false
      }, particleDelay)
    }
  }
  typeText()
})

const handleLogin = async () => {
  if (!loginFormRef.value) return

  try {
    await loginFormRef.value.validate()
    loading.value = true

    // TODO: 实现登录逻辑
    console.log('登录表单数据：', loginForm)

    ElMessage.success('登录成功')

    router.push('/manager')
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
        // background: linear-gradient(45deg, $primary-color, $secondary-color);
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
        display: inline-block;
        position: relative;
        min-height: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .char {
        display: inline-block;
        opacity: 0;
        transform: translateY(10px);
        animation: charAppear 0.3s forwards;

        &.particle {
          animation: particleAppear 0.3s forwards;
        }
      }

      .cursor {
        display: inline-block;
        width: 2px;
        height: 1em;
        background: linear-gradient(45deg, $primary-color, $secondary-color);
        margin-left: 2px;
        animation: blink 0.7s infinite;
        vertical-align: middle;
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

@keyframes charAppear {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes particleAppear {
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.8);
    filter: blur(2px);
  }

  50% {
    opacity: 0.5;
    transform: translateY(5px) scale(1.1);
    filter: blur(1px);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
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
