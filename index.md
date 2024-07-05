---
# https://vitepress.dev/reference/default-theme-home-page api-examples  markdown-examples
layout: home
titleTemplate: 一款轻量易用的中后台模版

hero:
  name: "v3-admin-el"
  tagline: 一个轻量、易用的中后台模版
  image:
    src: /svg/logo.svg
    alt: CAPress
  actions:
    - theme: brand
      text: 快速了解
      link: /md/start/introduce.md

    - theme: alt
      text: 在GitLab上查看
      link: http://192.168.1.223/huxiaochuan/v3-admin-el

    - theme: brand
      text: uni-app 模版框架
      link: http://180.100.200.14/uni/

features:
  - icon: <span class="i-mdi:lightning-bolt-outline"></span>
    title: 技术栈
    details: 基于 Vue3.4、Vite5、Pinia、Element-Plus
    link: https://vitejs.dev
    linkText: Vite

  - icon: <span class="i-lucide:webhook"></span>
    title: Hooks
    details: 命令式调用弹窗、抽屉。常用Hooks封装，在一定程度上节省开发时间
    link: /md/hooks/useDialog.md
    linkText: hooks

  - icon: <span class="i-material-symbols-light:component-exchange"></span>
    title: 组件
    details: 提供可配置式表单、表格、以及可扩展的表单元素组件
    link: /md/components/form.md
    linkText: components

  - icon: <span class="i-carbon:tool-kit"></span>
    title: 工具箱
    details: 常用函数、统一请求库、 指令、脚手架工具(v3-cli)、vscode 插件(v3-snippets)、自动化部署等
    link: /md/tools/utils.md
    linkText: api

  - icon: <span class="i-simple-icons:fusionauth"></span>
    title: 权限方案
    details: 提供统一的权限管理方案
    link: /md/auths/api.md
    linkText: auth

  - icon: <span class="i-ph:warning-bold"></span>
    title: 规范
    details: 配置 Eslint、Prettier、Husky、Commitlint、Lint-staged 规范前端工程代码规范
    link: https://vitejs.dev
    linkText: Vite
---
