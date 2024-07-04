import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/v3Press/",
  title: "v3-admin-el",
  titleTemplate: " v3-admin-el",
  head: [["link", { rel: "icon", href: "/v3Press/svg/logo.svg" }]],
  description: "v3-admin-el 文档",
  lang: "zh-CH",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    logo: "/svg/logo.svg",
    nav: [
        { text: "uni-dove", link: "https://huxc.github.io/v3-uni-doc/" },
        { text: "vue", link: "https://cn.vuejs.org/" },
        { text: "element-plus", link: "https://element-plus.org/zh-CN/#/zh-CN" },
        { text: "v1.0.0",link: "" },
    ],
    sidebar: [
      {
        text: "开始",
        collapsed: false,
        items: [
          { text: "简介", link: "/md/start/introduce.md" },
          { text: "快速上手", link: "/md/start/index.md" },
        ],
      },
      {
        text: "组件",
        collapsed: false,
        items: [
          { text: "v3-form", link: "/md/components/form.md" },
          { text: "v3-form-item", link: "/md/components/formItem.md" },
          {
            text: "v3-table",
            link: "/md/components/table.md",
          },
          { text: "v3-dialog", link: "/md/components/dialog.md" },
          { text: "v3-svg", link: "/md/components/svg.md" },
          { text: "v3-icon", link: "/md/components/icon.md" },
        ],
      },
      {
        text: "hooks",
        collapsed: false,
        items: [
          { text: "useDialog", link: "/md/hooks/useDialog.md" },
          { text: "useDrawer", link: "/md/hooks/useDrawer.md" },
          { text: "useEcharts", link: "/md/hooks/useEcharts.md" },
          { text: "useHandleData", link: "/md/hooks/useHandleData.md" },
        ],
      },
      {
        text: "权限方案",
        collapsed: false,
        items: [
          { text: "权限接口", link: "/md/auths/api.md" },
          { text: "路由配置", link: "/md/auths/router.md" },
          { text: "按钮权限", link: "/md/auths/button.md" },
        ],
      },
      {
        text: "工具箱",
        collapsed: false,
        items: [
          { text: "常用函数", link: "/md/tools/utils.md" },
          { text: "统一请求库", link: "/md/tools/api.md" },
          { text: "指令", link: "/md/tools/instruct.md" },
          { text: "v3-cli", link: "/md/tools/v3-cli.md" },
          { text: "v3-snippets", link: "/md/tools/v3-snippets.md" },
        ],
      },
      {
        text: "部署",
        collapsed: false,
        items: [
          { text: "环境变量", link: "/md/deploy/env.md" },
          { text: "自动部署", link: "/md/deploy/index.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/huxc/v3-admin-el" },
    ],
    outline: {
      level: [2, 6],
      label: "目录",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
        copyright: "Copyright © 2024 huxc",
    },
  },
});
