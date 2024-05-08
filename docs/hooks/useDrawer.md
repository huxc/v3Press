# useDrawer

::: info 命令式抽屉

以 js 的方式调用抽屉组件（与 useDialog 使用类似）无需 import 可直接使用。

:::

## 参数

### 详细参数看下放代码注释

```js
useDrawer({
    attrs = {}, // el-drawer组件参数
    props = {}, // el-drawer内部组件的prop参数
    componentEl, // el-drawer弹出的内容(组件形式且必填)
    beforeClose, // 弹框关闭之前的回调函数 done:为关闭弹框函数，param：为内部组件的回调参数
    afterClose // 窗口关闭之后的回调函数
  }
)
```

### beforeClose 函数

::: danger 注意
在定义了`beforeClose`参数后，组件(componentEl)内的 useDrawer 的自定义关闭事件无法自动关闭,需要调用 beforeClose 函数的第一个参数(此参数为关闭函数)才可以关闭
:::

```vue
// 组件内（componentEl）
<script setup>
const emit = defineEmits(["clsDwr"]);

//在需要关闭的逻辑中调用
emit("clsDwr", { ...回传的参数 });
</script>
```

```js
useDrawer({
  // param 为组件内回传的参数，如需要多个可以对象的方式回传
  beforeClose: (done, param) => {
    //此处操作业务逻辑
    ...
    // 完成业务逻辑后调用关闭函数
    done();
  },
});
```

## 使用

弹窗只是一个空白的弹框页面，里面的内容必须以**组件**的形式传入，使用如下：<br/>

```vue
<template>
  <div />
</template>

<script setup name="example-table">
import Form from "./components/form/index.vue";

function onDialog(rows) {
  useDrawer({
    attrs: { title: "表单编辑" },
    props: { oldForm: rows },
    componentEl: Form,
    beforeClose: (done, param) => {
      ... // 其他业务逻辑
      done();
    },
    // param 为组件内回传的参数，如需要多个可以对象的方式回传
    afterClose: (param) => {
      // 刷新表格
      tableRef.value.refresh();
    },
  });
}
</script>
```
