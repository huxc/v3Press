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
        { text: "v3-uni-template", link: "http://180.100.200.14/uni/" },
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
        text: "规范",
        collapsed: false,
        items: [
          { text: "编码规范", link: "/md/standard/language.md" },
          { text: "Vue规范", link: "/md/standard/vue.md" },
          { text: "统一代码风格", link: "/md/standard/common.md" },
          { text: "规范化配置", link: "/md/standard/workflow.md" },
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
        {
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1.09em" height="1em" viewBox="0 0 256 236"><path fill="#e24329" d="m128.075 236.075l47.104-144.97H80.97z" /><path fill="#fc6d26" d="M128.075 236.074L80.97 91.104H14.956z" /><path fill="#fca326" d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012z" /><path fill="#e24329" d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0z" /><path fill="#fc6d26" d="m128.075 236.074l47.104-144.97h66.015z" /><path fill="#fca326" d="m241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012z" /><path fill="#e24329" d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0z" /></svg>',
          },
          link: "http://192.168.1.223/huxiaochuan/v3-admin-el",
        },
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
