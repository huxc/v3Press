// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // app.use(() => {
    //   return {
    //     mounted() {
    //       document.querySelectorAll('.vitepress-theme-default-code').forEach((block) => {
    //         block.style.backgroundColor = '#f5f5f5' // 设置背景颜色
    //         block.style.color = '#333' // 设置文本颜色
    //       })
    //     }
    //   }
    // })
  }
}
