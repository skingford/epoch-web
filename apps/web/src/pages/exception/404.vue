<template>
  <div class="not-found-container">
    <div class="content">
      <div class="error-code">
        <span class="number">4</span>
        <div class="circle">
          <div class="face">
            <div class="eyes">
              <div class="eye left"></div>
              <div class="eye right"></div>
            </div>
            <div class="mouth"></div>
          </div>
        </div>
        <span class="number">4</span>
      </div>
      <h1 class="title">页面未找到</h1>
      <p class="description">抱歉，您访问的页面不存在或没有权限</p>
      <el-button type="primary" size="large" class="back-button" @click="router.push('/')">
        <el-icon class="icon">
          <HomeFilled />
        </el-icon>
        返回首页
      </el-button>
    </div>
    <div class="particles">
      <div v-for="(_, index) in Array(20)" :key="index" class="particle" :style="getParticleStyle()"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HomeFilled } from '@element-plus/icons-vue'
import { router } from '@/routes'

const getParticleStyle = () => {
  const size = Math.random() * 10 + 5
  const duration = Math.random() * 20 + 10
  const delay = Math.random() * 5
  const x = Math.random() * 100
  const y = Math.random() * 100

  return {
    '--size': `${size}px`,
    '--duration': `${duration}s`,
    '--delay': `${delay}s`,
    '--x': `${x}%`,
    '--y': `${y}%`,
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #667eea;
$secondary-color: #764ba2;
$background-color: #f8fafc;
$text-color: #1a202c;
$animation-timing: cubic-bezier(0.4, 0, 0.2, 1);

.not-found-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, $background-color 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;

  .content {
    text-align: center;
    z-index: 1;
    padding: 2rem;
    animation: fadeIn 0.8s $animation-timing;

    .error-code {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
      position: relative;

      .number {
        font-size: 8rem;
        font-weight: 800;
        color: $primary-color;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        animation: float 3s ease-in-out infinite;
      }

      .circle {
        width: 120px;
        height: 120px;
        background: $secondary-color;
        border-radius: 50%;
        margin: 0 1rem;
        position: relative;
        animation: bounce 2s ease-in-out infinite;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

        .face {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;

          .eyes {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;

            .eye {
              width: 12px;
              height: 12px;
              background: white;
              border-radius: 50%;
              animation: blink 3s infinite;

              &.right {
                animation-delay: 1.5s;
              }
            }
          }

          .mouth {
            width: 20px;
            height: 10px;
            border: 3px solid white;
            border-radius: 0 0 20px 20px;
            border-top: 0;
            margin: 0 auto;
          }
        }
      }
    }

    .title {
      font-size: 2.5rem;
      color: $text-color;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .description {
      font-size: 1.2rem;
      color: #64748b;
      margin-bottom: 2rem;
    }

    .back-button {
      padding: 0.8rem 2rem;
      font-size: 1.1rem;
      border-radius: 50px;
      background: linear-gradient(45deg, $primary-color, $secondary-color);
      border: none;
      color: white;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba($primary-color, 0.3);
      }

      .icon {
        margin-right: 0.5rem;
      }
    }
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    .particle {
      position: absolute;
      width: var(--size);
      height: var(--size);
      background: linear-gradient(45deg, $primary-color, $secondary-color);
      border-radius: 50%;
      opacity: 0.6;
      animation: float var(--duration) ease-in-out infinite;
      animation-delay: var(--delay);
      left: var(--x);
      top: var(--y);
    }
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes blink {

  0%,
  100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(0.1);
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

@media (max-width: 768px) {
  .error-code {
    .number {
      font-size: 6rem;
    }

    .circle {
      width: 100px;
      height: 100px;
    }
  }

  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }
}
</style>