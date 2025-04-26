module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新功能
        'fix',      // 修复 bug
        'docs',     // 文档变更
        'style',    // 代码格式调整
        'refactor', // 代码重构
        'test',     // 测试相关
        'chore',    // 构建或辅助工具变更
        'revert',   // 回退代码
        'perf'      // 性能优化
      ]
    ],
    'subject-case': [0] // 不限制 subject 大小写
  }
};