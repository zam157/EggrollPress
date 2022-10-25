import 'uno.css'
import './styles/index.css'

import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import ImgWithTitle from './components/ImgWithTitle.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('ImgWithTitle', ImgWithTitle)
  },
}
