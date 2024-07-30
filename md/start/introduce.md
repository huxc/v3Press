# 简介

<img src="https://komarev.com/ghpvc/?username=huxc&label=Views&color=orange&style=flat" alt="访问量统计" />

`v3-admin-el` 一款基于 `Vue3.4` + `Vite5` + `Pinia` + `Element-Plus` 后台管理框架模版，使用目前(2024)最新技术栈开发。对表格、表单进行了可配置(json)封装，同时加入常用全局 `hooks`,如：`命令式弹窗`、`命令式抽屉`、`列表分页查询`等。大幅提升后台管理系统的效率和质量。<br/><br/>项目内置了一些常用工具如：`常用函数`、 `指令`、`权限控制`、`自动格式化`、`layout布局`、`请求封装`、`请求拦截`、`登录拦截`、`统一配置`、`自动化部署`等；<br/><br/>`v3-cli`是为`v3-admin-el`量身定制的脚手架工具，包含：`创建/初始化项目`、`根据swagger生成接口`、`根据路由生成Page`;<br/><br/>`v3-snippets` 是`vscode`插件，除了常用代码段之外还有`v3-admin-el`特有代码段。

## 目录结构

```js
├─.husky   // Git hooks工具，通过通过钩子控制代码质量
├─.vscode  // vscode的常规配置、插件推荐
├─public   // 静态根目录
└─src      // 工作目录
    ├─api  // 统一请求库
    │  ├─config  // 域名配置
    │  ├─helper  // axios封装
    │  └─modules // 请求接口文件
    ├─assets  // 静态文件夹
    │  ├─icons  // svg存放的目录
    │  └─images  // 图片存放目录
    ├─components  // 公共全局组件
    │  ├─v3-collapse-transition  // 折叠组件
    │  ├─v3-dialog  // 命令式弹窗组件
    │  ├─v3-form    // 可配置式表单组件
    │  ├─v3-form-item  // 可配置表单子组件
    │  ├─v3-search  // 查询组件
    │  ├─v3-svg     // 可显示本地svg组件
    │  └─v3-table   // 可配置表格组件
    │      ├─components
    │      └─hooks
    ├─config      // 全局配置文件
    ├─directives  // 全局指令
    │  └─modules
    ├─enums  // 枚举类文件集合，列入下拉列表的默认值都放在这里
    ├─hooks  // 全局hooks
    ├─layouts  // 主页面布局
    │  └─components
    │      ├─Header
    │      │  └─components
    │      ├─Main
    │      │  └─components
    │      ├─Menu
    │      └─Tabs
    │          └─components
    ├─routers  // 路由配置
    │  ├─helper //静态、动态路由读取工具
    │  └─modules // 路由子文件放这
    ├─store  // 全局状态管理pinia
    │  └─modules // 多种类状态
    ├─styles  // 全局样式
    │  └─element
    ├─utils  // 工具集（尽量存放纯函数）
    └─views  // 开发的所有页面放这
        ├─error // 错误页面
        ├─home  // 首页
        ├─login // 登录页
        │  └─components
        │      └─hooks
        ├─menu  // 测试菜单页面
        │  ├─menu1
        │  ├─menu2
        │  │  ├─menu21
        │  │  ├─menu22
        │  │  │  ├─menu221
        │  │  │  └─menu222
        │  │  └─menu23
        │  └─menu3
        ├─redirect // 跳转专用页面
        └─table // 表格页面 仅供参考
            ├─components
            │  └─form
            │      └─hooks
            ├─hooks
            ├─t1
            ├─t2
            ├─t3
            └─t4

```
