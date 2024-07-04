# useHandleData

::: info 简介
对 Element Plus 中 ElMessageBox 组件的 hooks 封装，常用于操作单条数据信息 (二次确认【`删除`、`禁用`、`启用`、`重置密码`】),返回 Promise 对象； 无需 import 可直接使用
:::

## 参数

`useHandleData(handleApi, params, message, confirmType, successMsg)`<br/>
第一个参数`{function}`[*handleApi*]：操作数据接口的 api 方法 (必传)<br/>
第二个参数`{object}`[*params*]：携带的操作数据接口的参数<br/>
第三个参数`{string}`[*message*]：提示信息 (必传)<br/>
第四个参数`{string}`[*confirmType*]：icon 类型 (不必传,默认为 warning)<br/>
第五个参数`{string}`[*successMsg*]：返回成功提示信息 (不必传,默认为操作成功)<br/>
`return {Promise}`

## 使用

```js{5}
function handleDel(ids) {
  //删除接口
  const delApi = api_account.deleteAccount;
  // 二次确认是否删除
  useHandleData(delApi, ids, "确定删除此条数据吗？").then(() => {
    // 删除成功后刷新列表数据
    tableRoot.value.refresh();
  });
}
```
