import fs from 'fs'
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

const resolveSidebarFiles = () => {
  const clubDir = './src/club'
  const mdRegex = /^[\s\S]*\.md$/ // match .md files
  const sidebar = fs.readdirSync(clubDir)
    .filter(fileName => fs.statSync(`${clubDir}/${fileName}`).isDirectory()) // save folders
    .map((folderName) => {
      const mdFiles = fs.readdirSync(`${clubDir}/${folderName}`)
        .filter(fileName => mdRegex.test(fileName))
      return {
        collapsible: true,
        collapsed: true,
        text: folderName,
        items: mdFiles.map((mdFileName) => {
          const noSuffix = mdFileName.replace('.md', '')
          return ({ text: noSuffix, link: `/club/${folderName}/${noSuffix}` })
        }),
      }
    })

  return sidebar
}

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
    sidebar: resolveSidebarFiles(),
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
