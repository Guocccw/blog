---
title: 10分钟搞懂css选择器
date: 2022-01-15
tags:
  - CSS
sidebar: 'auto'
categories:
  - CSS
---

# 10 分钟搞懂 css 选择器

## 一、选择器

css 选择器是 css 的规则的一部分。

它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式

选择器所选择的元素，叫做“选择器的对象”

## 常用的选择器

1. id 选择器
2. 类选择器
3. 标签选择器
4. 后代选择器 语法：空格
5. 子选择器 语法：> 例如：.one>.one_1 选择父元素为.one 的所有.one_1 的元素
6. 相邻选择器 语法：+ 例如： .one+.two 选择.one 相邻的.two 元素
7. 群组选择器 语法：, 例如：div,p

### 伪类选择器

:link：选择未被访问
:visited：选取已被访问的链接
:active：选择活动链接
:hover ：鼠标指针浮动在上面的元素
:focus ：选择具有焦点的
:first-child：父元素的首个子元素

### 伪元素选择器

1. ::before
2. ::after
   <font>单冒号 是 css2 正确的写法，::双冒号，是 css3 新写法且兼容性写法</font>

### 属性选择器

[attribute] 选择带有 attribute 属性的元素
[attribute=value] 选择所有使用 attribute=value 的元素
[attribute~=value] 选择 attribute 属性包含 value 的元素
[attribute|=value]：选择 attribute 属性以 value 开头的元素

### 伪类选择器

:first-of-type 表示一组同级元素中其类型的第一个元素
:last-of-type 表示一组同级元素中其类型的最后一个元素
:only-of-type 表示没有同类型兄弟元素的元素
:only-child 表示没有任何兄弟的元素
:nth-child(n) 根据元素在一组同级中的位置匹配元素
:nth-last-of-type(n) 匹配给定类型的元素，基于它们在一组兄弟元素中的位置，从末尾开始计数
:last-child 表示一组兄弟元素中的最后一个元素
:root 设置 HTML 文档
:empty 指定空的元素
:enabled 选择可用元素
:disabled 选择被禁用元素
:checked 选择选中的元素
:not(selector) 选择与 <selector> 不匹配的所有元素

### 属性选择器

[attribute*=value]：选择 attribute 属性值包含 value 的所有元素
[attribute^=value]：选择 attribute 属性开头为 value 的所有元素
[attribute$=value]：选择 attribute 属性结尾为 value 的所有元素
