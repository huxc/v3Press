# 快速上手

::: info 规范

项目需遵循 Open-Close 原则，对模版中无法满足需求的组件或函数，应该扩展而非修改

:::

## Node 版本

::: danger 兼容性注意

项目需要 Node.js 版本 18+，20+。当你的包管理器发出警告时，请注意升级你的 Node 版本。
:::

## 包管理

::: danger 提示

项目强制使用 pnpm 包管理工具。如果未安装请全局安装

:::

## 创建项目

### v3-cli

可全局安装 v3admin-cli 脚手架工具`npm i -g v3admin-cli`
创建项目

```js
v3-cli create <project-name>
```

### git 地址

```js
git clone http://192.168.1.223/huxiaochuan/v3-admin-el.git
cd v3-admin-el

pnpm i
```

## 配置业务接口地址

在路径`src/api/config/domainConfig.js`中 需根据业务接口地址进行相应的修改，支持后端微服务

```js
const hosts = {
  development: "", // 开发环境地址
  test: "", // 测试环境地址
  production: "", // 生产环境地址 运行 pnpm run prod
};
const host = hosts[import.meta.env.MODE];

// 微服务网关配置
export const domain_list = {
  business: `${host}/business`,
  foundation: `${host}/foundation`,
  account: `${host}/account`,
  calculate: `${host}/calculate`,
};
```

## v3-table 自动接口请求配置

在使用 `v3-table` 组件时，需要根据接口返回值修改`src/hooks/useTable.js`中的返回值代码，更改需要赋值的返回字段

```js
/** getList函数中 **/

// 基于接口统一处理 根据业务接口自行调整
nextTick(() => {
  if (typeOf(response.data) === "array") {
    state.tableData = response.data;
  } else {
    state.tableData = response.data?.list || [];
    state.totalCount = response.data?.total || 0;
  }
});
```

## 格式化配置

::: info

项目格式化使用 ESLint 插件格式化，需要 vscode 插件 ESLint(版本 3+)。项目配置已放在`.vscode/settings.json`中, 如果配置未能生效，请先逐步注释掉 vscode 设置中的 settings.json 的配置，查找出影响格式化的配置
:::

```json
{
  // 启用ESlint的eslint.config.js配置支持
  "eslint.experimental.useFlatConfig": true,

  // 禁用默认格式化器，使用eslint代替
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // 使用vscode插件eslint格式化
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "format/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // 配置所需文件支持eslint格式化
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "css",
    "scss",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "astro"
  ]
}
```

## vscode 插件推荐

### Vue-Official

原 volar 插件，新功能：

- 支持通过拖拽导入组件;
  操作步骤：按住鼠标左键，把组件拖拽到想要引入的地方，VSCode 会提示按住 shift 放入编辑器中，此时我们按 shift 并放开鼠标左键，即可自动导入组件。
- 全面支持 Vue 3.4 新语法特性
- 自动补全 ref 的.value; 配置`"vue.autoInsert.dotValue": true`即可

### path-alias

一个提供路径别名补全，跳转 vscode 插件

- 可以自定义路径别名，在设置`pathAlias.aliasMap`中配置，key 是你要定义的别名，value 是路径别名所对应的绝对路径。其中可以使用`${cwd}`来代替当前工作目录的绝对路径。比方说，我想用`@` 代表我工作目录下的 src 目录，`/images`代表工作目录下的/src/assets/images 目录。那么我只用在配置中写
  ```json
  "pathAlias.aliasMap":{
        "@": "${cwd}/src",
        "/images": "${cwd}/src/assets/images"
  },
  ```

### Turbo Console Log

快捷 console.log 调试，选择要打印的变量` ctrl + alt + L`

### ESLint、Prettier

模版项目格式化依赖 eslint 插件，需要安装 3+版本,`.css .scss .html`部分依赖 Prettier 插件
