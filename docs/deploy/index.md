# 部署

前端自动化部署，支持开发、测试、生产多环境配置。配置好后即可自动完成部署。

## 初始化配置文件

在根目录的 deploy.config.js 中配置相应的服务器参数。

```js
module.exports = {
  projectName: "v3-admin-el", // 项目名称
  /**此处两个字段与环境对象中的用户名密码二选一 */
  //privateKey: "/Users/fuchengwei/.ssh/id_rsa", //本地私钥地址
  //passphrase: "", // 地私钥密码
  readyTimeout: 20000, // 超时时间(毫秒)
  cluster: [], // 集群部署配置，要同时部署多台配置此属性如: ['dev', 'test', 'prod']
  dev: {
    // 环境对象
    name: "开发环境", // 环境名称
    script: "npm run build", // 打包命令
    host: "192.168.0.1", // 服务器地址
    port: 22, // 服务器端口号
    username: "root", // 服务器登录用户名
    password: "123456", // 服务器登录密码
    distPath: "dist", // 本地打包生成目录
    webDir: "/usr/local/nginx/html", // 服务器部署路径（不可为空或'/'）
    bakDir: "/usr/local/nginx/backup", // 备份路径 (打包前备份之前部署目录 最终备份路径为 /usr/local/nginx/backup/html.zip)
    isRemoveRemoteFile: true, // 是否删除远程文件（默认true）
    isRemoveLocalFile: true, // 是否删除本地文件（默认true）
  },
  test: {
    // 环境对象
    name: "测试环境", // 环境名称
    script: "npm run build:test", // 打包命令
    host: "192.168.0.1", // 服务器地址
    port: 22, // 服务器端口号
    username: "root", // 服务器登录用户名
    password: "123456", // 服务器登录密码
    distPath: "dist", // 本地打包生成目录
    webDir: "/usr/local/nginx/html", // 服务器部署路径（不可为空或'/'）
    bakDir: "/usr/local/nginx/backup", // 备份路径 (打包前备份之前部署目录 最终备份路径为 /usr/local/nginx/backup/html.zip)
    isRemoveRemoteFile: true, // 是否删除远程文件（默认true）
    isRemoveLocalFile: true, // 是否删除本地文件（默认true）
  },
  prod: {
    // 环境对象
    name: "生产环境", // 环境名称
    script: "npm run build:prod", // 打包命令
    host: "192.168.0.1", // 服务器地址
    port: 22, // 服务器端口号
    username: "root", // 服务器登录用户名
    password: "123456", // 服务器登录密码
    distPath: "dist", // 本地打包生成目录
    webDir: "/usr/local/nginx/html", // 服务器部署路径（不可为空或'/'）
    bakDir: "/usr/local/nginx/backup", // 备份路径 (打包前备份之前部署目录 最终备份路径为 /usr/local/nginx/backup/html.zip)
    isRemoveRemoteFile: true, // 是否删除远程文件（默认true）
    isRemoveLocalFile: true, // 是否删除本地文件（默认true）
  },
};
```

::: danger 提示
配置文件中的 `privateKey、passphrase`与`dev/test/prod`中的`username、password`字段二选一；如果不想把服务器密码保存在配置文件中，也可以在配置文件中删除 password 字段。在部署的时候会弹出输入密码界面。
:::

## 自动部署

执行`pnpm run deploy:test`进行部署。其中`:test`是环境名称，在配置文件 package.json 中可自行更改
