// commitlint 配置文件
// 参考文档: https://commitlint.js.org/#/reference-rules
export default {
  // 继承 @commitlint/config-conventional 规范
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义
    'type-enum': [
      2, // 错误级别: 0=禁用, 1=警告, 2=错误
      'always', // 应用方式: always=始终, never=从不
      [
        'feat',     // 新功能(feature)
        'fix',      // 修复 bug
        'docs',     // 文档变更(documentation)
        'style',    // 代码格式调整(不影响代码运行的变动)
        'refactor', // 代码重构(既不是新增功能，也不是修改 bug 的代码变动)
        'test',     // 测试相关(添加缺失测试或更正现有测试)
        'chore',    // 构建或辅助工具变更(影响构建系统或外部依赖的更改)
        'revert',   // 回退代码(撤销某次提交)
        'perf',     // 性能优化(提升性能的代码更改)
        'ci',       // 持续集成相关(CI配置文件和脚本的更改)
        'build'     // 构建相关(影响项目构建或依赖项的更改)
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0],
    // header 最大长度为100个字符
    'header-max-length': [2, 'always', 100],
    // subject 不能为空
    'subject-empty': [2, 'never'],
    // type 不能为空
    'type-empty': [2, 'never'],
    // scope 不限制
    'scope-case': [0]
  }
};