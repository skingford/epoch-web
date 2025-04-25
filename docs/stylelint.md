# 代码格式化、风格检查和提交规范体系

## 代码风格

```bash
pnpm add prettier -D

pnpm add -D eslint eslint-config-prettier eslint-plugin-vue globals typescript-eslint

pnpm add -D stylelint stylelint-config-standard stylelint-config-recommended-vue
```

## commitlint

```bash
pnpm add -D  @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog

pnpm add -D  husky
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
npx husky add .husky/pre-commit 'npm run lint'
```

## 提交信息规范

使用 npm run commit 或 git cz 进行交互式提交，遵循以下格式：

```bash
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### type 类型​​

* feat: 新功能
* fix: 修复 bug
* docs: 文档变更
* style: 代码格式/样式变更
* refactor: 重构代码
* test: 测试相关
* chore: 构建/依赖变更
* revert: 回退

feat(login): add remember me func
