---
title: 前端面试题
date: 2022-01-02
tags:
  - 面试
sidebar: 'auto'
categories:
  - 前端面试
sticky: 2
---

# 前端面试小结

## HTML

### 1. 简述一下你对 HTML 语义化的理解？

    1. 用正确的标签做正确的事情
    2. 内容结构化，结构更清晰，便于开发和阅读
    3. 便于爬虫搜索

### 2. iframe 框架有那些优缺点？

    优点：实现调用的每一个页面内容的更改，方便快捷
    缺点：iframe 会阻塞主页面的 Onload 事件，会出现滚动条

### 3. HTML5 的 form 如何关闭自动完成功能？

    autocomplete=off

### 4. 前端页面有哪三层构成，分别是什么？作用是什么？

    1. 结构层 (HTML)
    2. 表示层 (CSS)
    3. 行为层 (JAVAScript)

---

## CSS

### 1. 标准的 CSS 的盒子模型和低版本 IE 的 CSS 的盒子模型？

    标准的盒子模型的宽度和IE的CSS盒子模型的宽度不同
    标准的盒子模型宽度为：内容的宽度（content）+ border + padding + margin
    低版本的盒子模型内容宽度为：内容的宽度（content + border + padding）+ margin

### 2. box-sizing 的两个属性有什么区别？

    context-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽
    border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽

### 3. position 跟 display、overflow、float 这些特性相互叠加后会怎么样？

    1. display:none：说明没有框，position和float都没有效果
    2. position:absolute/fixed：这个框已经脱离普通文档流了，display会被重置，float没有效果
    3. float不是none:该框浮动并且 ‘display’ 会被按照转换对应表设置

### 4. 对 BFC 规范的理解

    BFC叫块级格式化上下文，内部规定了Block Box如何布局
    1. 内部的Box会在垂直方向上一个接一个放置。
    2. Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。
    3. 每个元素的margin box 的左边，与包含块border box的左边相接触。
    4. BFC的区域不会与float box重叠。

### 5. 如何触发 BFC

    1. 根元素，即html
    2. float的值不为none（默认）
    3. overflow的值不为visible（默认）
    4. display的值为inline-block、table-cell、table-caption
    5. position的值为absolute或fixed🍉
