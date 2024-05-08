# useRequest

::: info 简介
完全继承 axios 的所有能力，并保留访问 axios 原始对象的能力，不破坏 axios 本身的行为。实现了自动携带 token、序列化`params`、接口失败自动弹出错误信息、导出文件流、全局 loading 状态、刷新 token 等功能点；无需 import 可直接使用
:::

## 参数

`useRequest({})` 方法中的参数对象支持传入 axios 所有属性，也包括自定义属性，自定义属性看以下*功能点*

## 自动携带 token

将登录后的 token 放入`/store/modules/user`中的 getToken 函数，其后接口请求无需任何设置所有接口会自动携带 token

## 序列化`params`

使用 qs.js 序列化请求参数，当 get 请求的时候传参如果是数组则格式化为`https://xxxxx?参数=2&参数=1&参数=3`

## 请求时是否弹出全局 loading

默认调用接口的时候弹出全局 loading，如果需要关闭，代码如下

```js{7}
// 定义时候关闭
// prop 参数支持 axios 所有属性，也包括自定义属性
export function putUser(data, prop = {}) {
  return useRequest({
    data,
    ...prop,
    isLoading: false,
    method: "put",
    domain: "account",
    url: "/user",
  });
}
```

```js
//调用接口的时候关闭
api_account_putUser(data, { isLoading: false });
```

## 接口失败自动弹出错误

::: info 注意
当前项目的接口是否成功是根据 success 返回值进行判断，错误的返回值默认接口返回的 msg 参数。如果需要改动可修改 api/helper/index.js 中 service.interceptors.response.use 中 success 的判断与提示逻辑
:::

当接口失败会自动弹窗错误，useRequest 参数对象的 isMsg 应于判断是否弹出错误信息，如关闭错误提醒，代码如下

```js{7}
// 定义时候关闭
// prop 参数支持 axios 所有属性，也包括自定义属性
export function putUser(data, prop = {}) {
  return useRequest({
    data,
    ...prop,
    isMsg: false,
    method: "put",
    domain: "account",
    url: "/user",
  });
}
```

```js
//调用接口的时候关闭
api_account_putUser(data, { isMsg: false });
```

## 接口错误后逻辑

如果接口失败需要继续业务逻辑，或者错误参数等，代码如下

```js
//调用接口的时候关闭
api_account_putUser(data, { isMsg: false }).then(
  (res) => {
    //成功后的逻辑
  },
  (rej) => {
    //失败后的逻辑
  }
);
```

## 导出文件流

如需要导出文件流的文件，需要设置 responseType 为 blob,导出的文件名如果需要自定义需要传人 fileName 属性并必须指定文件类型，如：dd.docx,cc.xls 等;代码如下

```js{7}
export function putUser(data, prop = {}) {
  return useRequest({
    data,
    ...prop,
    method: "put",
    responseType:'blob',
    fileName:'文件名.docx'
    domain: "account",
    url: "/user",
  });
}
```

或

```js
//调用接口的时候
api_account_putUser(data, { fileName: "文件名.docx" });
```

如果需要获取文件流自带的文件名需要根据接口返回的字段进行调整：src/api/helper/response 中的 exportFile 修改`/filename="?([^";]*)"?/` 中的 filename

```js
 else {
      // 获取文件流返回的文件名
      const contentDisposition = response.headers['Content-Disposition']
      let fileName
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="?([^";]*)"?/)
        fileName = match ? match[1] : null
        if (fileName)
          saveAs(data, fileName)
      }
    }
```

## 无感刷新 token

当 token 失效，有两种方案，1.退出到登录页，2.刷新 token；<br/>
**退出登录**：存在的问题是，当某个页面的请求数量不止一个，当 token 过期弹窗提醒的时候会弹出多次，useRequest 已经解决此类问题 <br/>
**刷新 token**:useRequest 已经实现无感刷新 token(目前尚未在业务中使用过) ， 但需要根据筛选 token 接口自行进行调整,_启用如下代码_<br/>

```js
// src/api/helper/index.js

/**
 * 此处为刷新token逻辑
 */
return api_刷新token的方法
  .then((res) => {
    const userStore = useUserStore();
    // 赋值刷新后的Token
    userStore.refToken(res.data);
    //   遍历执行需要重新发起请求的队列
    retryRequests.forEach((cb) => cb(res));
    //   清空队列
    retryRequests = [];
    return createRequest(service);
  })
  .catch(() => {
    retryRequests = [];
    res.msg = "登录已失效，请重新登录。";
    router.push({ path: "/login" });
  })
  .finally(() => {
    // 请求完成后重置flag
    isRefreshing = false;
  });
```
