import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/v3Press/",
  title: "v3-admin-el",
  titleTemplate: " v3-admin-el",
  head: [["link", { rel: "icon", href: "/v3Press/imgs/logo.png" }]],
  description: "v3-admin-el 文档",
  lang: "zh-CH",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    logo: "/imgs/logo.png",
    nav: [{ text: "首页", link: "/" }],
    sidebar: [
      {
        text: "开始",
        items: [
          { text: "简介", link: "/docs/start/introduce.md" },
          { text: "快速上手", link: "/docs/start/index.md" },
        ],
      },
      {
        text: "组件",
        items: [
          {
            text: "v3-table",
            link: "/docs/components/table.md",
          },
          { text: "v3-form", link: "/docs/components/form.md" },
          { text: "v3-form-item", link: "/docs/components/formItem.md" },
          { text: "v3-dialog", link: "/docs/components/dialog.md" },
        ],
      },
      {
        text: "hooks",
        items: [
          { text: "useDialog", link: "/docs/components/useDialog.md" },
          { text: "useDrawer", link: "/docs/components/useDrawer.md" },
          { text: "useEcharts", link: "/docs/components/useEcharts.md" },
          { text: "useHandleData", link: "/docs/components/useHandleData.md" },
        ],
      },
      {
        text: "权限",
        items: [
          { text: "权限接口", link: "/docs/auths/api.md" },
          { text: "菜单权限", link: "/docs/auths/menu.md" },
          { text: "按钮权限", link: "/docs/auths/button.md" },
        ],
      },
      {
        text: "工具",
        items: [
          { text: "常用函数", link: "/docs/tools/utils.md" },
          { text: "封装axios", link: "/docs/tools/api.md" },
        ],
      },
      {
        text: "规范",
        items: [{ text: "工程化工作流", link: "/docs/apis/file.md" }],
      },
      {
        text: "部署",
        items: [{ text: "打包部署", link: "/docs/deploy/index.md" }],
      },
    ],

    socialLinks: [
      //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1.09em" height="1em" viewBox="0 0 256 236"><path fill="#e24329" d="m128.075 236.075l47.104-144.97H80.97z" /><path fill="#fc6d26" d="M128.075 236.074L80.97 91.104H14.956z" /><path fill="#fca326" d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012z" /><path fill="#e24329" d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0z" /><path fill="#fc6d26" d="m128.075 236.074l47.104-144.97h66.015z" /><path fill="#fca326" d="m241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012z" /><path fill="#e24329" d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0z" /></svg>',
        },
        link: "https://github.com/vuejs/vitepress",
      },
    ],

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      copyright: "Copyright ©2024-present @huxc",
    },
  },
});
