---
title: 10分钟搞懂盒子模型
date: 2022-01-15
tags:
  - CSS
sidebar: 'auto'
categories:
  - 前端基础
---

# 10 分钟搞懂盒子模型

## 什么是盒子模型？

当我们对浏览器页面进行布局的时候，浏览器的渲染引擎会根据标准来将所有的元素，表现为一个盒子。

盒子的组成包括了四个部分：`content`、`border`、`padding`、`margin`

当我们对一个 div 设置 200px 的宽度和 20px 的 padding 的时候，我们观察浏览器盒子的宽度，发现不是 200px 而是 240px。

这就是因为我们浏览器 <font color="red">默认采用的是 W3C 标准盒子模型</font>。

## 标准盒子模型（content-box）

<img src="https://pic.rmb.bdstatic.com/bjh/fa5a808ce225abe2bb7d6bd218e564f3.png">

通过观察上图我们可以知道，盒子的 width 指的是内容的宽度，height 指的是内容的高度。

## 怪异盒子模型（border-box）

<img src="https://pic.rmb.bdstatic.com/bjh/460e0d01ce52e4a05336f6bd89bb04aa.png">

怪异盒子模型的宽度等于 margin+里面的（border+padding+content）。

## box-sizing

- content-box 默认值，元素的 width/height 不包含 padding，border，与标准盒子模型表现一致
- border-box 元素的 width/height 包含 padding，border，与怪异盒子模型表现一致
- inherit 指定 box-sizing 属性的值，应该从父元素继承
