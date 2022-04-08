---
title: 网易云音乐去灰
date: 2022-01-12
tags:
  - NeteaseMusic
sidebar: 'auto'
categories:
  - 黑科技
---

# PC 端网易云音乐去灰

## 准备工作

1. 云服务器（如果你想只在自己的 windows 电脑上用，不需要 ECS，只需要在本地下载部署即可）
2. NODE 环境
3. 在云服务商控制台开放相关端口

## 开源项目

 这里我使用的是 Github 开源项目，[**UnblockNeteaseMusic**](https://github.com/nondanee/UnblockNeteaseMusic)。所以这篇博客也相当于这个开源项目的简单使用说明。这个开源项目的功能就是解锁网易云音乐客户端变灰歌曲，本质上就是使用 QQ / 虾米 / 百度 / 酷狗 / 酷我 / 咪咕 / JOOX 音源替换变灰歌曲链接。

 这里安装和使用的教程可以参考 [**csdn 教程**](https://blog.csdn.net/weixin_44122062/article/details/120484422) ，我主要是参考这个教程来配置，这里介绍的非常详尽，关于安装方法不再赘述。

## 使用

### PC 端使用：

![](https://www.ipicbed.com/images/2022/01/14/ct01.png)

### MAC 端使用：

系统偏好设置 > 网络 > 高级 > 代理

### IOS 使用：

由于新规发布后，国家下架了 APPStore 上所有的代理工具，不能通过常规方式下载 Shadowrocket 等工具下载，实在需要的话，可以通过登录国外的 APPID 到 APPStore 上下载。
这里本人并没有成功使用代理工具手机访问，但是可以用 WLAN 代理的方式，用手机直接访问网易云。
使用方式：设置>无线局域网>WLAN 的详情>配置代理>自动>URL。
<br/>
URL 为 http://你的服务器 IP:端口/proxy.pac
<br/>
<img src="https://www.ipicbed.com/images/2022/01/14/ct3.jpg" width = "30%" />
<br/>
<br/>
<br/>
<img src="https://www.ipicbed.com/images/2022/01/14/ct2.jpg" width = "30%" />
