# Epoch Monorepo

这是一个基于 Turborepo + pnpm 的 monorepo 项目。

## 项目结构

```
.
├── apps/                # 应用目录
│   └── web/            # Web 应用
├── packages/           # 共享包目录
│   ├── tsconfig/      # TypeScript 配置
│   ├── ui/            # UI 组件库
│   └── config/        # 共享配置
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发
pnpm dev

# 构建
pnpm build

# 清理
pnpm clean
```

## 技术栈

- Vue 3
- TypeScript
- Vite
- Turborepo
- pnpm

## commitlint

* feat: 新功能
* fix: 修复 bug
* docs: 文档变更
* style: 代码格式/样式变更
* refactor: 重构代码
* test: 测试相关
* chore: 构建/依赖变更
* revert: 回退

feat(login): add remember

## 参考
[vue3-turbo-component-lib-template](https://github.com/huangmingfu/vue3-turbo-component-lib-template/blob/master/README.md)
[turborepo](https://github.com/vercel/turborepo/tree/main)
[blitz](https://github.com/blitz-js/blitz)
[web-infra-dev](https://github.com/web-infra-dev/modern.js)
[changesets](https://github.com/changesets/changesets)
[highlight](https://github.com/highlight/highlight?tab=readme-ov-file)
