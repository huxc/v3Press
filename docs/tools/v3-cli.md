# v3admin-cli

为 v3-admin-cli 模版量身打造的脚手架工具

## 全局安装

```js
 //包含pnpm初始化项目 自动在vscode中打开
npm i -g v3admin-cli

```

## 创建 v3-admin-el 模版项目

```js
v3-cli create <project-name> 或者 v3-cli cr <project-name>//创建一个v3-admin-el模版项目

v3-cli create <project-name> -f //如果目标目录存在，则覆盖该目录
```

## 自动生成 Api

swagger-url 为 swagger 网址中的 api 链接

```js
v3-cli swagger [swagger-url] 或者 v3-cli swg [swagger-url] //创建一个v3-admin-el模版项目

v3-cli swagger [swagger-url] -f //不需要网关名称(domain)
```

### 配置文件

如果`v3-cli swagger`没有输入 swagger-url，则默认读取 v3.config.js 配置文件，该文件放在项目的根目录<br/>
详见注释

```js
const template = null; // api模版配置
export default {
  entry: "http://10.100.2.197:9303/v2/api-docs", //[swagger-url]
  domain: "system", //微服务的网关名称
  template, //配置模版
  output: { path: "./src/api/auto-api" }, //输出文件路径（生成的api）
};
```

### 模版配置

配置文件的中的 template 为 api 的模版配置，遵循[Art-template](https://aui.github.io/art-template/zh-cn/docs/)模版语法;如：

#### 模版数据源

```js
{
    fileDescription: '文件描述',
    title: '标题',
    date: '创建时间',
    host: '服务器地址',
    basePath: '基础路径',
    description: "描述",
    version: '版本',
    fileName: '文件名',
    //请求接口数组
    funs: [
        {
            url: '请求路径',
            type: '请求类型，如：get,post',
            fuName: '方法名',
            summary: '方法的功能注释',
            description: '描述',
            //请求参数集合
            parameters:[
                type:'数据类型',
                description:'描述',
                required:'是否必填'
            }],
        }
    ],
}
```

#### 默认配置

可根据模版语法自由更改需生成的 api 格式

```js
const template = `
{{each funs item index}}
/**
 * {{item.summary}}.
 * 调用函数 api_{{fileName}}_{{item.fuName}}{{each item.parameters v i}}
 * @param {{'{'+(v.type || 'object')+'}'}} {{v.description}}{{v.required?' - *必填':''}}.{{/each}}
*/
export function {{item.fuName}}(data, prop = {}) {
  return useRequest({
    data,
    ...prop,
    method: '{{item.type}}',{{if item.domain}}
    domain: '{{item.domain}}',{{/if}}
    url: '{{item.url}}',
    })
}
{{/each}}
`;

export default {
  ...,
  template:template, //配置模版
  ...,
};
```

## 生成 views

### 生成 views

默认读取根目录的配置文件 v3.config.js 中的 router 对象

```js
//v3.config.js
export default {
  ... ,
  router: {
    path: "./src/routers/modules", //router所在的文件夹
    ignore: ["**/notFound.js"], //可忽略掉某些文件
    outPath: "./src/views", // 生成的views路径
  },
};

```

### router 文件

router 编写注意事项

- 路由的 path 必填且唯一
- 路由的 name 必填且唯一
- 路由 mete 中的 title 必填且唯一
