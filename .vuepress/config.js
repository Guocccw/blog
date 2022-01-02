module.exports = {
  title: "Gordon",
  description: "故事的开头总是这样，适逢其会，猝不及防。", //加载的时候一闪而过的一行字
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "主页", link: "/", icon: "reco-home" },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      {
        text: "文档",
        icon: "reco-document",
        items: [{ text: "vuepress-reco" }],
      },
    ],
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
    ],
    logo: "/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "Gordon",
    // 作者头像
    authorAvatar: "/head_icon.jpg",
    // 备案号
    record: "IOS123123",
    // 项目开始时间
    startYear: "2020",
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true,
  },
};
