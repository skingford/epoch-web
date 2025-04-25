# epoch-web

## vite

```bash
# 创建项目
npm create vite@latest epoch-web -- --template vue-ts

pnpm add @vitejs/plugin-legacy -D

pnpm add vite-plugin-inspect -D

pnpm add unplugin-auto-import -D

pnpm add vite-plugin-restart -D

pnpm add vite-plugin-svg-icons -D

pnpm add vite-plugin-compression -D

pnpm add  vite-plugin-cdn-import -D

pnpm add vite-plugin-dts -D

pnpm add rollup-plugin-visualizer -D

pnpm add vite-plugin-vconsole -D
```

## ncu

1. 预升级准备

```bash
# 1. 创建备份分支
git checkout -b upgrade-deps

# 2. 备份当前依赖版本（生成版本快照）
npm list --depth=0 > dependencies-before-upgrade.txt

# 3. 清理缓存和旧依赖
rm -rf node_modules package-lock.json

npm cache clean --force
```

2.使用官方工具升级

```bash
# 1. 安装 npm-check-updates (ncu)
npm install -g npm-check-updates

# 2. 检查可升级的依赖（不修改文件）
ncu

# 3. 交互式选择升级（推荐）
ncu --interactive

# 4. 执行升级（自动更新 package.json）
ncu -u

# TypeScript 项目特殊处理 确保类型定义同步升级
ncu -f "/^@types/"

# 使用 TurboRepo 的升级命令
npx turbo run "ncu -u" --parallel --filter=./packages/*
```

3.选择性升级策略

```bash
# 仅升级补丁版本（保持主版本和次版本不变）
ncu --target patch

# 仅升级非破坏性变更的版本
ncu --target minor

# 排除特定包（如需要保留旧版）
ncu -x vue-router
```

4.验证升级结果

```bash
# 1. 安装新依赖
pnpm install

# 2. 检查版本差异
npx npm-why vue  # 检查某个包的升级原因

# 3. 生成升级报告
npm list --depth=0 > dependencies-after-upgrade.txt

diff dependencies-before-upgrade.txt dependencies-after-upgrade.txt
```
