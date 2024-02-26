import { defineConfig4CustomTheme } from 'vuepress/config'

export default defineConfig4CustomTheme({
  base: '/web-project/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '磊子的博客 ',
      description: '个人笔记',
    },
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/web/' },
      { text: '后端', link: '/back/' },
      { text: '算法', link: '/algorithm/' },
      { text: '工具', link: '/tools/' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: '' },
    ],
  },
})
