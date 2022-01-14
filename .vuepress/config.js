module.exports = {
	title: 'Gordon',
	description: '万般皆苦，唯有自渡!', //加载的时候一闪而过的一行字
	dest: 'public',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		[
			'meta',
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1,user-scalable=no'
			}
		]
	],
	theme: 'reco',
	themeConfig: {
		nav: [
			{ text: '主页', link: '/', icon: 'reco-home' },
			{ text: '时间线', link: '/timeline/', icon: 'reco-date' },
			{
				text: '文档',
				icon: 'reco-document',
				link: '/docs'
			}
		],
		type: 'blog',
		// 博客设置
		blogConfig: {
			category: {
				location: 3, // 在导航栏菜单中所占的位置，默认2
				text: '分类' // 默认 “分类”
			},
			tag: {
				location: 3, // 在导航栏菜单中所占的位置，默认3
				text: '标签' // 默认 “标签”
			}
		},
		friendLink: [
			{
				title: 'PengSir',
				desc: '热爱编程彭先森',
				email: 'cnpenggang@qq.com',
				logo: '/logo.png',
				link: 'https://www.bookbook.cc/'
			}
		],
		logo: '/logo.png',
		// 搜索设置
		search: true,
		searchMaxSuggestions: 10,
		// 自动形成侧边导航
		sidebar: 'auto',
		// 最后更新时间
		lastUpdated: '最后更新于',
		// 作者
		author: 'Gordon',
		// 作者头像
		authorAvatar: '/head_icon.jpg',
		// 备案号
		// record: "IOS123123",
		// 项目开始时间
		startYear: '2022'
	},
	markdown: {
		lineNumbers: true
	}
}
