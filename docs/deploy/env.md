# Vite 中环境变量的配置

## 设置.env 中的内容信息

vue3 + vite 必须使用 VITE 开头的配置信息 否则无法获取

```
NODE_ENV = "env"
VITE_NODE_ENV = "env"	//VITE开头的给vue3+vite使用

```

如果不想使用 VITE 开头自己修改就在 vite.config.js 文件中添加 envPrefix:“APP\_

```js
//vite.config.js
export default defineConfig({
  plugins: [vue()],
  envPrefix: "APP_", //APP_  为自定义开头名
});
```

::: danger 注意
此模版项目未使用.env 配置文件，开发过程中如需要使用可自行配置
:::

## vite 中使用环境变量 import.meta.env

有四种环境变量，如下所示：

- MODE，用来指明现在所处于的模式，一般通过它进行不同环境的区分，比如 dev、test、pre、prd 等等，默认为：“development”
- BASE_URL，用来请求静态资源初始的 url
- PROD，用来判断当前环境是否是正式环境
- DEV，开发环境

## 使用环境变量

使用 import.meta.env.VITE_NODE_ENV 获取环境变量

```js
console.log(import.meta.env); //查看相关信息 这里不显示非VITE开头的变量
```

## 在 package.json 中配置模式

上面使用的时候是固定写法 需要切换.env 和 .env.pro 中不同的变量信息
在打包中配置 如下：
使用 --mode pro 进行设置

```json
"scripts": {
    "dev": "vite --mode dev",   // 取 .env.dev文件中的配置
    "pro": "vite --mode pro",   // 取 .env.pro文件中的配置
},

```

我们的服务端微服务域名配置`src/api/config/domainConfig.js` 就是使用的 package.json 中配置模式，如上代码`--mode development`设置为 `development`,则`import.meta.env.MODE`的值就是`development`
如：

```js
const hosts = {
  test: "", // 测试环境地址
  production: "", // 生产环境地址 运行 pnpm run prod
  development: "https://mock.apifox.com/m1/4483965-4130611-default", // 开发环境地址
};
const host = hosts[import.meta.env.MODE];

export const domain_list = {
  system: `${host}/system`,
  account: `${host}/account`,
};

//此处的 domain_list.system = https://mock.apifox.com/m1/4483965-4130611-default/system
```
