module.exports = {
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	title: 'Guoccc',
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
			},
			{
				title: '小贱贱',
				desc: '收罗各种福利的网站',
				email: '',
				logo: 'https://www.xiaojianjian.net/wp-content/uploads/2019/08/xiaojianjian_avatar_1-64x64.png',
				link: 'https://www.xiaojianjian.net/'
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
		record: '懒惰今天，累死明天',
		// 项目开始时间
		startYear: '2022',
		noFoundPageByTencent: false,
		// keyPage: {
		// 	keys: ['6fd31d9960a9c1159f061706ed8fc3f6'],
		// 	color: '#42b983',
		// 	lineColor: '#42b983'
		// },
		valineConfig: {
			appId: 'h8Ke04ahcsK6PYz2q42vjpm5-gzGzoHsz', // your appId
			appKey: '2aqX2lsN9bohwNcNSSahFp0b' // your appKey
		}
	},
	markdown: {
		lineNumbers: true
	},
	plugins: [
		['@vuepress-reco/vuepress-plugin-pagation', {}],
		[
			'cursor-effects',
			{
				size: 2, // size of the particle, default: 2
				shape: ['star'], // shape of the particle, default: 'star'
				zIndex: 999999999 // z-index property of the canvas, default: 999999999
			}
		],
		[
			'@vuepress-reco/vuepress-plugin-kan-ban-niang',
			{
				theme: ['shizuku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'miku', 'blackCat', 'z16'],
				clean: false,
				messages: {
					welcome: '欢迎来到我的博客',
					home: '谢谢你的喜欢哦',
					theme: '大家一起努力呀',
					close: '拜拜哦'
				},
				messageStyle: { right: '68px', bottom: '190px' },
				width: 150,
				height: 220
			}
		],
		[
			'vuepress-plugin-nuggets-style-copy',
			{
				copyText: '复制代码', //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
				tip: {
					content: '复制成功!'
				}
			}
		]
	]
}
