---
title: vscode报错
date: 2022-01-03
tags:
  - vscode
  - 问题笔记
sidebar: 'auto'
categories:
  - vscode
---

# VSCode 报错 Vetur can't find 'tsconfig.json' or 'jsconfig.json'的解决方法

## 原因

    Vetur 0.31.0 版本新增了一个 vetur.config.js 的配置文件，

    在这个版本之后，会优先查找项目中是否配有 tsconfig.json（ts 项目）或者 jsconfig.json（js 项目），

    没找到这 2 个文件就去找 vetur.config.js，如果都没有，就会抛出这个提示。

## 说明

    VSCode 的 JavaScript 支持可以在两种不同的模式下运行：

    文件范围（没有 jsconfig.json）

    在此模式下，在 VSCode 中打开的 JavaScript 文件被视为独立单元。

    只要文件 a.js 没有显式引用文件 b.ts（使用///引用指令或 CommonJS 模块），两个文件之间就没有共同的项目上下文。

**显式项目（使用 jsconfig.json）**

    JavaScript 项目是通过 jsconfig.json 文件定义的。目录中存在此类文件表示该目录是 JavaScript 项目的根目录。

    文件本身可以选择列出属于项目的文件，要从项目中排除的文件，以及编译器选项（见下文）。

    当您在工作空间中有一个定义项目上下文的 jsconfig.json 文件时，JavaScript 体验会得到改进。

    因此，当您在新工作空间中打开 JavaScript 文件时，我们提供了一个创建 jsconfig.json 文件的提示。

<br/>

---

### 解决方法（3 选 1）

1. 配置 Vetur 插件，忽略提示：

vetur.ignoreProjectWarning: true

2. 在项目根目录创建 jsconfig.json 文件，加入代码：

{
"include": [
"./src/*"
]
}

3. 在项目根目录创建 vetur.config.js 文件，加入代码：

```
module.exports = {
// vetur 配置，会覆盖 vscode 中的设置。 default: `{}`
settings: {
"vetur.useWorkspaceDependencies": true,
"vetur.experimental.templateInterpolationService": true
},
// 普通项目采用默认配置 default: `[{ root: './' }]`
}
```
