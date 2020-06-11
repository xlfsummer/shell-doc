module.exports = {
    title: 'Shell Doc',
    description: '在线命令行文档',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '教程', link: '/guide/' },
            { text: '主题', link: '/topic/' },
            { text: '示例', link: '/examples/' },
        ],
        sidebar: {
            '/guide/': [
                '',
                '介绍',
                '文件导航',
            ],
            '/topic/': [
                '',
                '语法',
            ],
        }
    }
}