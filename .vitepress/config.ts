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

const base = '/EggrollPress/'
const faviconHref = `${base}favicon.png`

export default defineConfig({
  title: 'EggrollPress',
  description: '一个非官方蛋卷俱乐部刊物网站',
  lang: 'zh-CN',
  srcDir: 'src',
  base,
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: faviconHref }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: faviconHref }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: faviconHref }],
    ['link', { rel: 'shortcut icon', href: faviconHref }],
  ],
  themeConfig: {
    logo: '/favicon.png',
    socialLinks: [{ icon: 'github', link: 'https://github.com/zam157/EggrollPress' }],
    nav: [
      { text: '✨征稿通知', link: '/solicit-contributions' },
    ],
    sidebar: [
      {
        collapsible: true,
        collapsed: true,
        text: '试刊(22.07.17)',
        items: [
          { text: '黑马奖', link: '/0/black-horse' },
          { text: '合订本', link: '/0/bound-volume' },
          { text: '观众社论', link: '/0/editorials' },
          { text: '线索', link: '/0/clues' },
          { text: '段子', link: '/0/memes' },
        ],
      },
      {
        collapsible: true,
        collapsed: true,
        text: '第一期(22.07.25)',
        items: [
          { text: '黑马奖', link: '/1/black-horse' },
          { text: '线索', link: '/1/clues' },
          { text: '观众社论', link: '/1/editorials' },
          { text: '体验', link: '/1/experiences' },
        ],
      },
      {
        collapsible: true,
        collapsed: true,
        text: '第二期(22.08.01)',
        items: [
          { text: '黑马奖', link: '/2/black-horse' },
          { text: '合订本', link: '/2/bound-volume' },
          { text: '线索', link: '/2/clues' },
          { text: '观众社论', link: '/2/editorials' },
          { text: '段子', link: '/2/memes' },
          { text: '体验', link: '/2/experiences' },
          { text: '带货', link: '/2/commerce' },
        ],
      },
      {
        collapsible: true,
        collapsed: true,
        text: '第三期(22.08.09)',
        items: [
          { text: '黑马奖', link: '/3/black-horse' },
          { text: '线索', link: '/3/clues' },
          { text: '观众社论', link: '/3/editorials' },
          { text: '编读往来', link: '/3/communication' },
          { text: '体验', link: '/3/experiences' },
          { text: '带货', link: '/3/commerce' },
        ],
      },
      {
        collapsible: true,
        collapsed: true,
        text: '第四期(22.08.16)',
        items: [
          { text: '黑马奖', link: '/4/black-horse' },
          { text: '体验', link: '/4/experiences' },
          { text: '线索', link: '/4/clues' },
          { text: '观众社论', link: '/4/editorials' },
          { text: '编读往来', link: '/4/communication' },
          { text: '读书', link: '/4/read' },
        ],
      },
      {
        collapsible: true,
        collapsed: true,
        text: '第五期(22.08.24)',
        items: [
          { text: '黑马奖', link: '/5/black-horse' },
          { text: '体验', link: '/5/experiences' },
          { text: '线索', link: '/5/clues' },
          { text: '观众社论', link: '/5/editorials' },
          { text: '编读往来', link: '/5/communication' },
          { text: '读书', link: '/5/read' },
          { text: '另类参考', link: '/5/inverse' },
        ],
      },
      {
        collapsible: true,
        collapsed: true,
        text: '第六期(22.09.01)',
        items: [
          { text: '黑马奖', link: '/6/black-horse' },
          { text: '编读往来', link: '/6/communication' },
          { text: '观众社论', link: '/6/editorials' },
          { text: '线索', link: '/6/clues' },
          { text: '合订本', link: '/6/bound-volume' },
          { text: '评论选登', link: '/6/comments' },
        ],
      },
      {
        collapsible: true,
        collapsed: true,
        text: '第七期(22.09.12)',
        items: [
          { text: '黑马奖', link: '/7/black-horse' },
          { text: '体验', link: '/7/experiences' },
          { text: '编读往来', link: '/7/communication' },
          { text: '观众社论', link: '/7/editorials' },
          { text: '线索', link: '/7/clues' },
          { text: '读书', link: '/7/read' },
          { text: '评论选登', link: '/7/comments' },
        ],
      },
    ],
    // algolia: {
    //   indexName: 'eggroll_press',
    //   appId: 'MJAMQS9CDR',
    //   apiKey: 'fdc84149fec5f459a4911f8ab5adda66',
    //   searchParameters: {
    //     facetFilters: ['version:v3'],
    //   },
    // },
  },
  vite: {
    plugins: [
      Unocss({}),
    ],
  },
})
