// 导入ESLint相关依赖
import eslint from '@eslint/js';
// 导入Prettier配置,用于解决ESLint和Prettier的冲突
import eslintConfigPrettier from 'eslint-config-prettier';
// 导入Vue ESLint插件
import eslintPluginVue from 'eslint-plugin-vue';
// 导入全局变量定义
import globals from 'globals';
// 导入TypeScript ESLint工具
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
  // 忽略特定文件
  {
    ignores: [
      '*.d.ts',      // 忽略类型声明文件
      '**/coverage', // 忽略测试覆盖率文件夹
      '**/dist'      // 忽略构建产物文件夹
    ]
  },
  {
    // 继承推荐配置
    extends: [
      eslint.configs.recommended,                    // ESLint推荐规则
      ...typescriptEslint.configs.recommended,       // TypeScript推荐规则
      ...eslintPluginVue.configs['flat/recommended'] // Vue3推荐规则
    ],
    // 指定需要检查的文件类型
    files: ['**/*.{ts,vue}'],
    // 语言选项配置
    languageOptions: {
      ecmaVersion: 'latest',  // 使用最新的ECMAScript特性
      sourceType: 'module',   // 使用ES模块
      // 全局变量定义
      globals: {
        ...globals.browser,   // 浏览器环境的全局变量
        // Vue Composition API的全局变量
        ref: 'readonly',
        computed: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly'
      },
      // 解析器配置
      parserOptions: {
        parser: typescriptEslint.parser // 使用TypeScript解析器
      }
    },
    // ESLint规则配置
    rules: {
      'vue/multi-word-component-names': 'off',      // 允许单个单词的组件名
      'vue/no-multiple-template-root': 'off',       // 允许多个根节点(Vue3)
      '@typescript-eslint/no-explicit-any': 'warn', // any类型警告
      '@typescript-eslint/no-unused-vars': 'warn',  // 未使用变量警告
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用console
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off' // 生产环境禁用debugger
    }
  },
  // 配置Prettier以避免冲突
  eslintConfigPrettier
);