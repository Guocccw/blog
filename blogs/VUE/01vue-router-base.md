---
title: vue-router基础
date: 2022-04-7
tags:
  - vue-router
sidebar: 'auto'
categories:
  - vue
---

## 一、 什么是vue-router?

通俗的来说，vue-roueter是一个**路径管理系统**，负责管理前端所有页面跳转的方式。vue-router是vue官方的一个路由**插件**，它和vue.js是深度集成的。传统的页面应用，是用一些超链接来实现页面切换和跳转的，但是在vue的SPA项目中，则是路径的切换。

**路由模块的本质 就是建立起url和页面之间的映射关系**。

那我们为什么不用a标签呢？因为在单页面项目中，相当于只有一个Index.html的主页，其他所有的页面作为组件来切换使用，a标签不起效果的。

## 二、vue-router的原理是什么？

首先我们要知道，我们vue的spa项目中，是只有一个页面的。在我们切换页面的时候，不用是重新加载页面，还是改变视图和更新某个容器中的内容。

换句话说，就是**更新视图而不重新请求页面**。

## 三、vue-router的模式

在vue-router中，提供了两种模式来实现前端路由。

### 1. Hash模式（默认）：

<font color=red size=4>本质上是使用了**window.location.hash**和**onhashchange()** 来实现的。</font>

**使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。**hash（#）是URL 的锚点，代表的是网页中的一个位置，单单改变#后的部分，浏览器只会滚动到相应位置，不会重新加载网页，也就是说 #是用来指导浏览器动作的，对服务器端完全无用，HTTP请求中也不会不包括#；同时每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用”后退”按钮，就可以回到上一个位置；所以说**Hash模式通过锚点值的改变，根据不同的值，渲染指定DOM位置的不同数据**。

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>hash</title>
</head>
<body>
    <button class="router" to="/home">首页</button>
    <button class="router" to="/content">内容</button>
    <div class="router-view">

    </div>

    <script>
        var btn=document.getElementsByClassName("router");
        var view=document.getElementsByClassName("router-view")[0];

        routes=[
            {"path":"/home", "component":"<p>我是首页的组件</p>"},
            {"path":"/content", "component":"<p>我是内容的组件</p>"}
        ]

        // 当hash值发生改变时，显示不同的内容  这是进入页面时触发的
        var hash=window.location.hash;
        if(hash){
            var url=hash.substring(1)
            renderView(url);
        }else{
            window.location.hash="/";
        }

        // 点击时，使得hash值发生改变，也就使得显示改变
        for(var i=0;i<btn.length;i++){
            btn[i].onclick=function(){
                var hash=this.getAttribute("to");
                renderView(hash);
            }
        }

        //hash值改变时  这是hash值发生改变时触发的
        // 历史回退
        window.onhashchange=function(){
            var hash=window.location.hash;
            if(hash){
                var url=hash.substring(1)
                renderView(url);
            }else{
                window.location.hash="/";
            }
        }

        function renderView(url){
            for(var i=0;i<routes.length;i++){
                if(routes[i]["path"]==url){
                    view.innerHTML=routes[i]["component"];
                    window.location.hash=url;
                }
            }
        }
    </script>
</body>
</html>
1
```



### 2. History模式：

<font color=red size=4>本质上是使用了**window.location.pathname 、history.pushState() 和 onpopstate()** 来实现的。</font>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>hash</title>
</head>
<body>
    <button class="router" to="/home">首页</button>
    <button class="router" to="/content">内容</button>
    <div class="router-view">

    </div>

    <script>
        // history 模式  pushState + onpopState事件
        // 要想使用history模式，必须在后端配置一个文件  配置说明：https://router.vuejs.org/zh/guide/essentials/history-mode.html
        // 文件名取为   .htaccess
        var btn=document.getElementsByClassName("router");
        var view=document.getElementsByClassName("router-view")[0];

        routes=[
            {"path":"/home", "component":"<p>我是首页的组件</p>"},
            {"path":"/content", "component":"<p>我是内容的组件</p>"}
        ]

        // 输入路径，对应的匹配
        var url=window.location.pathname.substring(4);
        renderView(url);

        // 点击时
        for(var i=0;i<btn.length;i++){
            btn[i].onclick=function(){
                var url=this.getAttribute("to");
                renderView(url);
            }
        }

        // 历史回退  监听历史管理发生改变
        window.onpopstate=function(ev){
            view.innerHTML=ev.state;
        }

       function renderView(url){
            if(url){
                for(var i=0;i<routes.length;i++){
                    if(routes[i]["path"]==url){
                        view.innerHTML=routes[i]["component"];
                        // window.location.pathname="/Day"+url;  //我一开始想看能不能直接设置，结果发现不能
                        // 因为改变window.location.pathname会导致页面再次刷新，那也这就死循环了
                        // 所以要想其他的办法来改变url

                        // 所以就出现了history.pushState()
                        // 第一个参数：存储进历史管理的数据
                        // 第二个参数：历史管理的title（还没实现，但需要占位）
                        // 第三个参数： 路由的地址
                        history.pushState(routes[i]["component"],"",url);
                        //这就实现了
                    }
                }
            }
       }
    </script>
</body>
</html>
```

由于hash模式会在url中自带#，如果不想要很丑的 hash，我们可以用路由的 history 模式，只需要在配置路由规则时，加入"mode: 'history'",这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。

```javascript
//main.js文件中
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

当使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，比较好看！不过我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了。
所以呢，要在服务端增加一个覆盖所有情况的候选资源：

如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

```javascript
export const routes = [ 
  {path: "/", name: "homeLink", component:Home}
  {path: "/register", name: "registerLink", component: Register},
  {path: "/login", name: "loginLink", component: Login},
  {path: "*", redirect: "/"}]
```

此处就设置如果URL输入错误或者是URL 匹配不到任何静态资源，就自动跳到到Home页面

### 3.	hash模式和history模式的区别

- hash 模式较丑，history 模式较优雅
- pushState 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，故只可设置与当前同文档的 URL
- pushState 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发记录添加到栈中
- pushState 通过 stateObject 可以添加任意类型的数据到记录中；而 hash 只可添加短字符串
- pushState 可额外设置 title 属性供后续使用
- hash 兼容IE8以上，history 兼容 IE10 以上
- history 模式需要后端配合将所有访问都指向 index.html，否则用户刷新页面，会导致 404 错误

### 4. 使用路由模块来实现页面跳转的方式

方式1：直接修改地址栏

方式2：this.$router.push(‘路由地址’)

方式3：`<router-link to="路由地址"></router-link>`

## 四、vue-router使用方式

 ### 1.	下载

   ```node
   npm install vue-router -S
   ```

   

### 2. 	引入并使用

   ```javascript
   // 在main.js中引入
   import VueRouter from 'vue-router'
   
   //安装插件
   Vue.use(VueRouter); //挂载属性
   ```

   

 ### 3.	配置

   ```javascript
   let router = new VueRouter({
       routes: [
           { path: '/home', component: Home }
       ]
   });
   ```

   

### 4.	设置入口

   ```html
   //app.vue中
   <template>
       <div>
           <!-- 设置view入口 -->
           <!-- 本质，RouterView【命令视图】和RouterLink【命令路线】本身是两个组件。-->
           <router-view></router-view>
       </div>
   </template>
   <script>
       export default {
           data(){
               return {}
           }
       }
   </script>
   ```

## 五、vue-router核心要点

 ### 1.传参

  #### 1. 用name传递

  在路由文件src/router/index.js里配置name属性

  ```javascript
  routes: [
      {
        path: '/',
        name: 'Hello',
        component: Hello
      }
  ]
  /*
  模板里(src/App.vue)用$router.name来接收
  比如：<p>{{ $router.name}}</p>
  */
  ```

   #### 2. 通过 `<router-link>`  标签中的 to 传参

  ```html
  <!-- 在标签中定义 name:路由的名称-->
  <router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>
  ```

  ```js
  // 接收方使用mustache表达式
  {{$route.params.key}}
  ```


​      

   #### 3. 利用url传参：配置文件里以冒号的形式设置参数

   通常在router/index.js中配置

   ```javascript
   {
       // 定义了传参的方式
       path:'/params/:newsId/:newsTitle',
       component:Params
   }
   ```

   ```html
   // 跳转组件中传入参数
   <router-link to="/params/198/jspang website is very good">params</router-link
   
   // 目标组件接受参数
   <template>
       <div>
           <h2>{{ msg }}</h2>
           <p>新闻ID：{{ $route.params.newsId}}</p>
           <p>新闻标题：{{ $route.params.newsTitle}}</p>
       </div>
   </template>
   
   ```

   

### 2. 单页面多路由区域操作

   在实际的开发中，经常有这样的需求，在一个单页面上，我们需要多个路由区域，根据不同的路由地址来在不同的区域展示不同的组件，这就是 **单页面多路由**。

   例：

   ```html
   <template>
       <div id="app">
           <!--使用name区分不同的 <router-view> 并向其中添加组件-->
          <router-view></router-view>
           <router-view class="right"></router-view>
           <router-view class="left"></router-view>
       </div>
   </template>
   ```

   <font color=red>在路由配置文件中，就可以通过 `name` 属性区分不同的路由区域</font>

```js
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            components: {
                default: Hi,
                left: Hi1,
                right: Hi2,
            },
        },
        {
            path: '/qian',
            name: 'Hello',
            components: {
                default: Hi,
                left: Hi2,
                right: Hi1,
            }
        }
    ]
})
```

### 3. vue-router 配置子路由

   **子菜单的路由方式，也叫子路由。**

   子路由一般用在一个页面有他的基础模版，然后它下面的页面都隶属于这个模版，只是部分改变样式。

   首先 先定义一个APP.VUE导航

   ```vue
   <template>
     <div id="app">
       <img src="./assets/logo.png">
       <!-- 导航 -->
       <div>
         <router-link to="/">Hello</router-link>|
         <router-link to="/Hi">Hi</router-link>|
         <router-link to="/Hi/Hi1">Hi1</router-link>|
         <router-link to="/Hi/Hi2">Hi2</router-link>
       </div>
       <router-view/>
     </div>
   </template>
   
   <script>
   export default {
     name: 'App'
   }
   </script>
   
   <style>
   #app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     margin-top: 60px;
   }
   </style>
   ```

   定义组件略，修改index.js定义路由

   子路由的写法是 **在原有的路由配置下加入children字段**。

   ```js
   import Vue from 'vue'
   import Router from 'vue-router'
   import HelloWorld from '@/components/HelloWorld'
   // 引入Hi
   import Hi from '@/components/Hi'
   // 引入Hi1
   import Hi1 from '@/components/Hi1'
   // 引入Hi2
   import Hi2 from '@/components/Hi2'
   
   Vue.use(Router)
   
   export default new Router({
     routes: [
       {
         path: '/',
         name: 'HelloWorld',
         component: HelloWorld
       },
       // 配置Hi对象
       {
         path: '/Hi',
         name: 'Hi',
         component: Hi,
         //引子路由
         children:[
           {path:'/',component:Hi},
           {path:'Hi1',component:Hi1},
           {path:'Hi2',component:Hi2},
         ]
       }
     ]
   })
   ```

   

### 4. vue-router的跳转方法

   ```js
   goToMenu(){
       this.$router.go(-1)//跳转到上一次浏览的页面
       this.$router.replace('/menu')//指定跳转的地址
       this.$router.replace({name:'menuLink'})// 指定跳转路由的名字下
       this.$router.push('/menu')通过push进行跳转
       this.$router.push({name:'menuLink'})通过push进行跳转路由的名字下
   }
   
   ```

   

### 5. 404页面的设置

   ```js
   {
      path:'*',
      component: Error
   }
   
   ```

   ```vue
   <template>
       <div>
           <h2>{{ msg }}</h2>
       </div>
   </template>
   <script>
       export default {
           data () {
               return {
                   msg: 'Error:404'
               }
           }
       }
   </script>
   ```

   

## 六、常见问题

### 1.	三个基本的概念 route, routes, router有什么区别?

> 1， $route对象
>
> $route对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query对象等。
>
> 2，$router对象
>
>  **$router对象是全局路由的实例，是router构造方法的实例。**
>
> 3，router
>
> router是挂载到了vue实例上,它的用法主要是 代码里面: this.$router.push  this.$router.replace







