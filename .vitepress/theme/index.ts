import 'uno.css'
import './styles/index.css'

import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import ImgWithTitle from './components/ImgWithTitle.vue'
import { useMediumZoom, useMediumZoomProvider } from './composibles/useMediumZoom'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component('ImgWithTitle', ImgWithTitle)
    useMediumZoomProvider(app, router) // enable image preview by default, see https://github.com/vuejs/vitepress/issues/854#issuecomment-1233866453
  },
  setup() {
    useMediumZoom()
  },
}
