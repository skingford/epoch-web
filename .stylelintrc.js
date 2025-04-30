export default {
  // 扩展基础配置
  extends: [
    // 标准配置
    'stylelint-config-standard',
    // Vue推荐配置
    'stylelint-config-recommended-vue',
    // SCSS标准配置
    'stylelint-config-standard-scss'
  ],
  rules: {
    // 允许任意类名格式
    'selector-class-pattern': null,
    // 允许特定性降序
    'no-descending-specificity': null,
    // 允许缺少通用字体族关键字
    'font-family-no-missing-generic-family-keyword': null,
    // 允许未知的伪类选择器
    'selector-pseudo-class-no-unknown': [
      true,
      {
        // 忽略Vue deep选择器
        ignorePseudoClasses: ['deep']
      }
    ],
    // 指定字符串使用单引号
    'string-quotes': 'single',
    // 禁止空块
    'block-no-empty': true,
    // 颜色函数使用现代写法
    'color-function-notation': 'modern',
    // 禁止重复的选择器
    'no-duplicate-selectors': true,
    // 限制空行数量
    'max-empty-lines': 1,
    // 要求或禁止在声明块中使用尾随分号
    'declaration-block-trailing-semicolon': 'always',
    // 指定缩进
    'indentation': 2,
    // 禁止未知的@规则
    'at-rule-no-unknown': [
      true,
      {
        // 忽略SCSS的@规则
        ignoreAtRules: ['extend', 'include', 'mixin', 'if', 'else', 'function', 'return', 'each', 'use']
      }
    ]
  }
}