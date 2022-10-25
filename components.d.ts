import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ImgWithTitle: typeof import('./.vitepress/theme/components/ImgWithTitle.vue')['default']
  }
}