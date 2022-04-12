---
title: vue路由vue-router进阶动态路由
date: 2022-04-7
tags:
  - vue-router
sidebar: 'auto'
categories:
  - vue-router
---

## 一、 导航守卫

> 【官网】“导航”表示路由正在发生改变

路由导航守卫指的是，当路由发生改变的时候，导航守卫负责控制路由的**跳转或者取消**。

我的理解是：我们需要监听拦截路由的改变的时候，进行的操作，就是导航守卫。

​	我们有几种方式可以进行导航守卫

1. 通过观察·`$route` 对象

   ```javascript
   watch: {
       $route(to, from) {
         // 对路由变化作出响应...
       }
   }
   ```

   

2. vue提供的钩子函数

   1. [全局前置守卫](#t1)

   2. [全局解析守卫](#t2)

   3. [全局后置钩子](#t3)

   4. [路由独享的守卫](#t4)

   5. [组件内的守卫](#t5)

### 1. <font id=t1>全局前置守卫</font>

> **router.beforeEach**

```
const router = new VueRouter({ ... })

/**
 * @description: 导航守卫
 * @param {to} 目标路由
 * @param {from} 当前路由
 * @param {next} 下一步
 * @return {*}
 */
router.beforeEach((to, from, next) => {
  // ...
})
```

**`next()`**: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)。

<table><tr><td bgcolor=yellow><font color=red > 非常重要：要求next（）必须调用有且只有一次</font></td></tr></table>

### 2. <font id=t2>全局解析守卫</font>

> **router.beforeResolve** 这和 `router.beforeEach` 类似，区别是在导航被确认之前，**同时在所有组件内守卫和异步路由组件被解析之后**，解析守卫就被调用。

```
const router = new VueRouter({ ... })

/**
 * @description: 导航守卫
 * @param {to} 目标路由
 * @param {from} 当前路由
 * @param {next} 下一步 
 * @return {*}
 */
router.beforeResolve** ((to, from, next) => {
  // ...
})
```


### 3. <font id=t3>全局后置钩子</font>

> **router.afterEach**

```
router.afterEach((to, from) => {
  // 这些钩子不会接受 next 函数也不会改变导航本身
})
```
### 4. <font id=t4>路由独享的守卫</font>

> **beforeEnter**

```
// 在路由配置上直接定义 beforeEnter 守卫：
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
      }
    }
  ]
})
```
### 5. <font id=t5>组件内的守卫</font>

> **beforeRouteEnter**

```
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```



## 二、路由元信息

再定义路由的时候，我们可以定义meta字段：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
```

## 三、动态路由

> 动态从数据库动态加载路由数据

由于我们应用场景中，经常会遇到不用的角色和角色下的权限不同，我们需要引入动态路由来完成该场景。

接下来我将简述思路以及详细描述实现过程如何实现动态路由：

> 实现思路：将用户的角色权限关系存储在数据库，利用导航守卫，在需要权限的路由上判断登录人是否所相应的权限，然后利用router.addRoutes() 方法将路由动态添加到路由表（route.js），完成跳转。
1. 配置静态路由表

   注意：使用动态路由建议使用路由元信息配置，方便获取路由信息。

   ```json
   {
       path: "/user",
       component: Layout,
       redirect: "/user/user",
       meta: { title: "用户管理", icon: "user" },
       children: [
         {
           path: "user",
           name: "user",
           component: () => import("@/views/management/user/index"), // 路由懒加载
           meta: { title: "用户管理", icon: "user" },
         },
         {
           path: "role",
           name: "role",
           component: () => import("@/views/management/role/index"),
           meta: { title: "角色管理", icon: "user" },
         },
       ],
   },
   ```

   

2. 登录时进行路由跳转

   ```js
       handleLogin() {
         this.$refs.loginForm.validate((valid) => {
           if (valid) {
             this.loading = true;
             this.$store.dispatch("user/login", this.loginForm).then(() => {
                 this.$router.push({ path: this.redirect || "/" }); // 进行路由跳转
                 this.loading = false;
               })
               .catch(() => {
                 this.loading = false;
               });
           } else {
             console.log("error submit!!");
             return false;
           }
         });
       },
   ```

3.  创建 pessmission.js ，设置路由导航

   在这里我们需要查询数据库的路由信息，搞清楚谁有什么权限，然后把查出来的路由表加入静态路由表中。

   ```javascript
   
   /**
    * @description: 导航守卫：给路由以权限
    * @param {to} 目标路由
    * @param {from} 当前路由
    * @param {next} 下一步
    * @return {*}
    */
   router.beforeEach(async (to, from, next) => {
     // 设置页面标题
     document.title = getPageTitle(to.meta.title);
   
     // 这里是判断是否登录
     const hasToken = getToken();
   
     if (hasToken) {
       if (to.path === "/login") {
         // 如果登录直接跳转到登录页面
         next();
       } else {
         // 确定用户是否通过角色获得了权限
         const hasRoles = store.getters.roles && store.getters.roles.length > 0;
         if (hasRoles) {
           next();
         } else {
           try {
             // 获取用户信息
             // 用户角色必须是一个对象数组，例如：['admin'] or ,['developer','editor']
             const roles = ["admin"]; //await store.dispatch("user/getInfo");
   
             // 这里是根据角色生成可访问的路由
             const accessRoutes = await store.dispatch(
               "permission/generateRoutes",
               roles
             );
   
             // 动态添加可访问路由
             router.addRoutes(accessRoutes);
             // 动态添加可访问路由后，重置路由
             // set the replace: true, so the navigation will not leave a history record
             next();
           } catch (error) {
             // 清除token并跳转到登录页面
             await store.dispatch("user/resetToken");
             Message.error(error || "Has Error");
             next(`/login?redirect=${to.path}`);
           }
         }
       }
     } else {
       /* has no token*/
       if (whiteList.indexOf(to.path) !== -1) {
         // 在白名单中直接跳转
         next();
       } else {
         // 跳转到登录页面
         next(`/login?redirect=${to.path}`);
       }
     }
   });
   ```



## 四、路由懒加载

> 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

#### 1、路由正常模式：

```javascript
// 1、先引入页面组件 es6
import Home from '@/components/Home'

// 2、使用组件
{
    path: '/home',
    component: Home
}
```

#### 2、懒加载模式

大项目中，为了提高初始化页面的效率，路由一般使用懒加载模式，一共三种实现方式。
（1）第一种写法：

```javascript
component: (resolve) => require(['@/components/One'], resolve)
```

（2）第二种写法：

```javascript
component: () => import('@/components/Two')
```

（3）第三种写法：

```javascript
components: r => require.ensure([], () => r(require('@/components/Three')), 'group-home')
```

**PS：**

- 一般常用第二种简写
- 第三种中，’group-home’是把组件按组分块打包, 可以将多个组件放入这个组中，在打包的时候Webpack会将相同 chunk 下的所有异步模块打包到一个异步块里面。



## 五、 过渡动画

#### 1、代码示例

（1）在`<router-view>`标签的外部添加`<transition>`标签，标签还需要一个name属性，代码如下：

```javascript
<transition name="fade" mode="out-in">
    <router-view />
</transition>
```

（2）加入CSS，一共4个CSS类名，四个类名与transition的name属性有关，比如name=”fade”，相应的css如下：

```javascript
/*页面切换动画*/
/*进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除*/
.fade-enter-active {
    transition: opacity .5s;
}
/*进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除*/
.fade-enter {
    opacity: 0;
}
/*离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除*/
.fade-leave {
    opacity: 1;
}
/*离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除*/
.fade-leave-active {
    opacity:0;
    transition: opacity .5s;
}
```

#### 2、过渡模式mode

- in-out：新元素先进入过渡，完成之后当前元素过渡离开，默认模式。
- out-in：当前元素先进行过渡离开，离开完成后新元素过渡进入。