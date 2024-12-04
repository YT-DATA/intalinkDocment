import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/intalinkDocment/",
    title: "intalink",
    description: "intalink",
    locales: {
        root: {
            label: '中文',
            lang: 'zh',
            link: '/zh/'
        },
        en: {
            label: 'English',
            lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
            link: '/en/' // 默认 /en/ -- 显示在导航栏翻译菜单上，可以是外部的
            // 其余 locale 特定属性...
        }
    },
    themeConfig: {
        logo: '/logo.png',
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: { //这里是个大坑，zh是不生效的，改为root即可
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        },
                    },
                }
            }
        },
        sidebar: {
            '/zh/': [
                {
                    text: '文档首页',
                    collapsed: false,
                    link: '/zh/index.md'
                },
                {
                    text: '快速部署',
                    collapsed: false,
                    items: [
                        { text: 'win快速部署教程', link: '/zh/Rapid-Deployment/Win-Floolproof.md' },
                        { text: 'linux快速部署教程', link: '/zh/Rapid-Deployment/Linux-Floolproof.md' },
                        { text: 'mac快速部署教程', link: '/zh/Rapid-Deployment/Mac-Floolproof.md' },
                    ]
                },
                {
                    text: '使用说明',
                    collapsed: false,
                    items: [
                        { text: '前言', link: '/zh/Use-Instructions/Preface.md' },
                        { text: 'intalink表结构说明', link: '/zh/Use-Instructions/Table-Structrue.md' },
                        { text: 'Intalink(开源版数据表结构)', link: '/zh/Use-Instructions/Open-Table-Explanation.md' },
                        { text: '数据关系表达式规则说明', link: '/zh/Use-Instructions/Data-Association.md' },
                        { text: 'Intalink接口调用方法',  link: '/zh/Use-Instructions/API-Usage.md' },
                        { text: 'Intalink链路数据说明', link: '/zh/Use-Instructions/Data-Explanation.md' },
                        { text: '系统部署说明', link: '/zh/Use-Instructions/System-Deployment.md' },
                        // { text: 'intalink核心能力视频-v0.8', link: '/api-examples' },
                    ]
                },
                {
                    text: 'API',
                    collapsed: false,
                    items: [
                        { text: 'API', link: '/api-examples' },
                    ]
                }
            ],

            // 当用户位于 `config` 目录时，会显示此侧边栏
            '/en/': [
                {
                    text: 'Home',
                    collapsed: false,
                    link: '/en/index.md'
                },
                {
                    text: '快速部署',
                    collapsed: false,
                    items: [
                        { text: 'Win Quick Deployment Guide', link: '/en/Rapid-Deployment/Win-Floolproof.md' },
                        { text: 'Linux Quick Deployment Guide', link: '/en/Rapid-Deployment/Linux-Floolproof.md' },
                        { text: 'Mac Quick Deployment Guide', link: '/en/Rapid-Deployment/Mac-Floolproof.md' },
                    ]
                },
                {
                    text: '使用说明',
                    collapsed: false,
                    items: [
                        { text: 'Preface', link: '/en/Use-Instructions/Preface.md' },
                        { text: 'Intalink Table Structure Explanation', link: '/en/Use-Instructions/Table-Structrue.md' },
                        { text: 'Intalink (Open Source Edition Data Table Structure)', link: '/en/Use-Instructions/Open-Table-Explanation.md' },
                        { text: 'Data Relationship Expression Rules Explanation', link: '/en/Use-Instructions/Data-Association.md' },
                        { text: 'Intalink API Usage Methods',  link: '/en/Use-Instructions/API-Usage.md' },
                        { text: 'Intalink Link Data Explanation', link: '/en/Use-Instructions/Data-Explanation.md' },
                        { text: 'System Deployment Instructions', link: '/en/Use-Instructions/System-Deployment.md' },
                        // { text: 'intalink核心能力视频-v0.8', link: '/api-examples' },
                    ]
                },
                {
                    text: 'API',
                    collapsed: false,
                    items: [
                        { text: 'API', link: '/api-examples' },
                    ]
                }
            ]

        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/YT-DATA/INTALINK'}
        ]
    }
})
