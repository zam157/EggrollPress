import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'

import type { DefaultTheme } from 'vitepress/theme'

const base = '/EggrollPress/'
const faviconHref = `${base}favicon.png`

type Chapter = '黑马奖' | '合订本' | '观众社论' | '线索' | '段子' | '带货' | '编读往来' | '体验' | '读书' | '另类参考' | '评论选登'
const sidebarGroupGenerator = (title: string, chapters: Chapter[]): DefaultTheme.SidebarGroup => ({
  collapsible: true,
  collapsed: true,
  text: title,
  items: chapters.map(chapter => ({ text: chapter, link: `/club/${title}/${chapter}` })),
})

export default defineConfig({
  title: 'EggrollPress',
  description: '一个非官方蛋卷俱乐部刊物网站',
  lang: 'zh-CN',
  srcDir: 'src',
  lastUpdated: true,
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
      sidebarGroupGenerator('第0期(22.07.17) 试刊', ['黑马奖', '合订本', '观众社论', '线索', '段子']),
      sidebarGroupGenerator('第1期(22.07.25)', ['黑马奖', '线索', '观众社论', '体验']),
      sidebarGroupGenerator('第2期(22.08.01)', ['黑马奖', '合订本', '线索', '观众社论', '段子', '体验', '带货']),
      sidebarGroupGenerator('第3期(22.08.09)', ['黑马奖', '线索', '编读往来', '体验', '带货']),
      sidebarGroupGenerator('第4期(22.08.16)', ['黑马奖', '体验', '线索', '观众社论', '编读往来', '读书']),
      sidebarGroupGenerator('第5期(22.08.24)', ['黑马奖', '体验', '线索', '观众社论', '编读往来', '读书', '另类参考']),
      sidebarGroupGenerator('第6期(22.09.01)', ['黑马奖', '编读往来', '观众社论', '线索', '合订本', '评论选登']),
      sidebarGroupGenerator('第7期(22.09.12)', ['黑马奖', '体验', '编读往来', '观众社论', '线索', '读书', '评论选登']),
      sidebarGroupGenerator('第8期(22.10.24)', ['黑马奖', '读书', '观众社论', '体验', '编读往来', '合订本', '评论选登']),
    ],
    editLink: {
      pattern: 'https://github.com/zam157/EggrollPress/edit/master/src/:path',
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '最近更新',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
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
  vue: {
    reactivityTransform: true,
  },
})
