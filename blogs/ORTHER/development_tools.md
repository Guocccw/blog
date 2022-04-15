---
title: 开发工具的安装和使用（长期更新）
date: 2022-4-8
tags:
  - tool
sidebar: 'auto'
categories:
  - 环境搭建

---

## 环境

### 一、JAVA

> 以8.0为例

#### 1. 下载

官网：[http://www.oracle.com/](http://www.oracle.com/index.html)

百度云：链接：https://pan.baidu.com/s/1qhg0ecbbHM8zqXCB5QPExg?pwd=7m0d  提取码：7m0d 

#### 2. 安装

​	可以选择目录，其他点击下一步即可。

> 这里推荐的目录结构如下：
>
> JDK:D:\development\Env\JAVA\8\jdk
>
> JRE:D:\development\Env\JAVA\8\jre

#### 3. 配置

​	右键电脑属性-》高级-》环境变量：在系统path中添加bin目录即可。

### 二、MYSQL

> 以8.0为例

#### 1. 下载

官网：https://www.mysql.com/cn/

百度云：链接：https://pan.baidu.com/s/1hwhDObxI1D41F5_rv_Rx_w?pwd=xaym  提取码：xaym 

#### 2. 安装

推荐server only 其他点击下一步即可。

#### 3. 配置

右键电脑属性-》高级-》环境变量：在系统path中添加bin目录即可。

### 三、NODE

#### 1. 下载

官网：[Node.js 中文网 (nodejs.cn)](http://nodejs.cn/)

百度云：链接：https://pan.baidu.com/s/1TiPupdEy93d3IghIuLccnA?pwd=4axg 提取码：4axg 

#### 2. 安装

直接下一步，即可。

#### 3. 配置

1. 建立node_global和node_cache文件夹
2. `npm config set prefix "C:\Program Files\nodejs\node_global`
   `npm config set cache "C:\Program Files\nodejs\node_cache`
3. 系统环境变量： Path:%NODE_PATH%;C:\Program Files\nodejs\node_global; NODE_PATH：C:\Program Files\nodejs\node_global

## 开发工具

一、IDEA

二、VSCODE

## 工具

1. JSONVIEW

   https://wwi.lanzoup.com/iei3D02vahsj

2. SNIPASTE

   [Snipaste](https://www.snipaste.com/)

3. Navicat

4. GIT/SVN

