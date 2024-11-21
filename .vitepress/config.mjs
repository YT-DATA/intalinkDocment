import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/intalinkDocment/",
  title: "intalink",
  description: "intalink",
  themeConfig: {
    logo:'/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档菜单', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '快速部署',
        items: [
          { text: 'win傻瓜式部署教程', link: 'zh//Rapid-Deployment/Win-Floolproof.md' },
          { text: 'linux傻瓜式部署教程', link: 'zh//Rapid-Deployment/Linux-Floolproof.md' },
          { text: 'mac傻瓜式部署教程', link: '/api-examples' },
        ]
      },
      {
        text: '使用说明',
        items: [
          { text: '前言', link: 'zh/Use-Instructions/Preface.md' },
          { text: 'intalink表结构说明', link: 'zh/Use-Instructions/Table-Structrue.md' },
          { text: 'Intalink(开源版数据表结构)', link: 'zh/Use-Instructions/Open-Table-Explanation.md' },
          { text: '数据关系表达式规则说明', link: 'zh/Use-Instructions/Data-Association.md' },
          { text: 'Intalink接口调用方法',  link: 'zh/Use-Instructions/API-Usage.md' },
          { text: 'Intalink链路数据说明', link: 'zh/Use-Instructions/Data-Explanation.md' },
          { text: '系统部署说明', link: 'zh/Use-Instructions/System-Deployment.md' },
          // { text: 'intalink核心能力视频-v0.8', link: '/api-examples' },
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'API', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YT-DATA/INTALINK' }
    ]
  }
})
