import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'

// const i18n = {
//   search: '搜索',
//   menu: '菜单',
//   toc: '本页目录',
//   returnToTop: '返回顶部',
//   appearance: '外观',
//   previous: '前一篇',
//   next: '下一篇',
//   pageNotFound: '页面未找到',
//   deadLink: {
//     before: '你打开了一个不存在的链接：',
//     after: '。'
//   },
//   deadLinkReport: {
//     before: '不介意的话请提交到',
//     link: '这里',
//     after: '，我们会跟进修复。'
//   },
//   footerLicense: {
//     before: '',
//     after: ''
//   },

//   // aria labels
//   ariaAnnouncer: {
//     before: '',
//     after: '已经加载完毕'
//   },
//   ariaDarkMode: '切换深色模式',
//   ariaSkip: '直接跳到内容',
//   ariaTOC: '当前页面的目录',
//   ariaMainNav: '主导航',
//   ariaMobileNav: '移动版导航',
//   ariaSidebarNav: '侧边栏导航',
// }

export default defineConfig({
  title: 'EggrollPress',
  description: '一个非官方蛋卷俱乐部刊物网站',
  lang: 'zh-CN',
  srcDir: 'src',
  base: '/EggrollPress/',
  themeConfig: {
    sidebar: [
      {
        text: '试刊',
        items: [
          { text: '黑马奖', link: '/0/black-horse' },
          { text: '合订本', link: '/0/bound-volume' },
          { text: '观众社论', link: '/0/comments' },
          { text: '线索', link: '/0/clues' },
          { text: '段子', link: '/0/memes' },
          { text: '附', link: '/0/bonus' },
        ],
      },
      {
        text: '第一期',
        items: [
          { text: '黑马奖', link: '/1/black-horse' },
          { text: '线索', link: '/1/clues' },
          { text: '观众社论', link: '/1/comments' },
          { text: '体验', link: '/1/experiences' },
          { text: '附', link: '/1/bonus' },
        ],
      },
    ],
  },
  vite: {
    plugins: [
      Unocss({}),
    ],
  },
})