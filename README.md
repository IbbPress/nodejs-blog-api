# 原生 Node.js 开发博客 Server 端

## 主要依赖

+ `cross-env@^7.0.0`: 跨平台设置和使用环境变量
+ `nodemon@^2.0.2`: 开发环境监测文件修改并自动重启 node 服务器
+ `mysql@^2.18.1`: nodejs 连接和操作 mysql

## Setup

安装依赖：

```bash
npm i
# or
yarn
```

启动本地开发环境：

```bash
npm run dev
# or
yarn dev
```

启动线上部署环境：

```bash
npm run prd
# or
yarn prd
```