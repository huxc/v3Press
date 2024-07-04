# 前端代码规范化配置

为了项目团队统一编码风格以及对代码的约束，故引入以下配置。

## ESLint + Prettier + husky + lint-staged 工具介绍

- **ESLint**: 对代码进行风格和规范进行检查，对不符合规范的代码给出提示，同时可以进行一定程度的自动修复
- **Prettier**: 因 eslint 无法对 css 等文件进行修复，故使用 prettier 规范对 Css,Html 等进行自动格式化代码。
- **Husky**:Git hooks 工具，通过配置一系列钩子，可以在 git 操作的不同阶段执行相应的命令；
- **lint-staged**:在提交代码前进行 lint 检查时，可以让 lint 只检查 git 暂存区（staged）的文件，而不会检查所有文件；

## eslint 配置

结合之前章节的规范描述，制定了对应的 eslint 规范

## 使用说明

上述工具已经将最新版本集成在本模版项目中，如果代码规范不符合 eslint 要求，将无法提交代码到 git
