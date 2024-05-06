# 快速上手

## 项目 gitLab 地址

```js
git clone http://192.168.1.223/huxiaochuan/v3-admin-el.git
cd v3-admin-el
code .

pnpm install
pnpm run dev
```

## 包管理

项目强制使用 pnpm 包管理工具

```js
npm install -g pnpm
```

## 源管理

建议使用 nrm 源管理工具

```js
npm install -g nrm
```

## 格式化配置

项目格式化使用 ESLint(版本 3+)，取消其他格式化，配置发在`.vscode/settings.json`中, 如果配置未能生效，请先逐步注释掉 vscode 设置中的 settings.json 的配置，查找出影响格式化的配置

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
