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
    nav: [{ text: "首页", link: "/" }],
    sidebar: [
      {
        text: "开始",
        collapsed: false,
        items: [
          { text: "简介", link: "/docs/start/introduce.md" },
          { text: "快速上手", link: "/docs/start/index.md" },
        ],
      },
      {
        text: "组件",
        collapsed: false,
        items: [
          { text: "v3-form", link: "/docs/components/form.md" },
          { text: "v3-form-item", link: "/docs/components/formItem.md" },
          {
            text: "v3-table",
            link: "/docs/components/table.md",
          },
          { text: "v3-dialog", link: "/docs/components/dialog.md" },
          { text: "v3-svg", link: "/docs/components/svg.md" },
          { text: "v3-icon", link: "/docs/components/icon.md" },
        ],
      },
      {
        text: "hooks",
        collapsed: false,
        items: [
          { text: "useDialog", link: "/docs/hooks/useDialog.md" },
          { text: "useDrawer", link: "/docs/hooks/useDrawer.md" },
          { text: "useEcharts", link: "/docs/hooks/useEcharts.md" },
          { text: "useHandleData", link: "/docs/hooks/useHandleData.md" },
        ],
      },
      {
        text: "权限方案",
        collapsed: false,
        items: [
          { text: "权限接口", link: "/docs/auths/api.md" },
          { text: "路由配置", link: "/docs/auths/router.md" },
          { text: "按钮权限", link: "/docs/auths/button.md" },
        ],
      },
      {
        text: "工具箱",
        collapsed: false,
        items: [
          { text: "常用函数", link: "/docs/tools/utils.md" },
          { text: "统一请求库", link: "/docs/tools/api.md" },
          { text: "指令", link: "/docs/tools/instruct.md" },
          { text: "v3-cli", link: "/docs/tools/v3-cli.md" },
          { text: "v3-snippets", link: "/docs/tools/v3-snippets.md" },
        ],
      },
      {
        text: "部署",
        collapsed: false,
        items: [
          { text: "环境变量", link: "/docs/deploy/env.md" },
          { text: "自动部署", link: "/docs/deploy/index.md" },
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
